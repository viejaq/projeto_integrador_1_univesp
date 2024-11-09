<?php
/**
 * Caminho do arquivo SQLite e do arquivo SQL
 */
$dbFile = 'minotti.sqlite';
$sqlFile = 'schema.sql';

/**
 * Conectar ao banco SQLite
 */
$db = sqlite_open($dbFile, 0666, $error);
if (!$db) {
    die("Erro ao abrir o banco de dados SQLite: $error");
}

/**
 * Função para interpretar o schema SQL do arquivo
 */
function parseSchemaSQL($sqlFile) {
    $schema = [];
    $sqlContent = file_get_contents($sqlFile);

    if ($sqlContent === false) {
        die("Erro ao ler o arquivo SQL.");
    }

    /**
     * Obtem cada tabela a partir do CREATE TABLE
     */
    preg_match_all('/CREATE TABLE (\w+)\s*\((.*?)\);/is', $sqlContent, $matches, PREG_SET_ORDER);

    foreach ($matches as $match) {
        $tableName = $match[1];
        $columns = explode(',', $match[2]);
        
        $schema[$tableName] = [];

        /**
         * Extrai cada coluna e seu tipo
         */
        foreach ($columns as $column) {
            $column = trim($column);
            if (preg_match('/^(\w+)\s+(.+)$/', $column, $colMatch)) {
                $colName = $colMatch[1];
                $colType = $colMatch[2];
                $schema[$tableName][$colName] = $colType;
            }
        }
    }

    return $schema;
}

/**
 * Carrega o schema a partir do SQL para sincronzação com o SQLite
 */
$schema = parseSchemaSQL($sqlFile);

/**
 * Verifica se a tabela existe
 */
function tableExists($db, $tableName) {
    $result = sqlite_query($db, "SELECT name FROM sqlite_master WHERE type='table' AND name='$tableName'");
    return sqlite_fetch_array($result, SQLITE_ASSOC) !== false;
}

/**
 * Obte, as colunas da tabela
 */
function getTableColumns($db, $tableName) {
    $columns = [];
    $result = sqlite_query($db, "PRAGMA table_info($tableName)");
    while ($row = sqlite_fetch_array($result, SQLITE_ASSOC)) {
        $columns[$row['name']] = $row['type'];
    }
    return $columns;
}

/**
 * Sincroniza a tabela
 */
function syncTable($db, $tableName, $columns) {
    if (!tableExists($db, $tableName)) {
        // Cria a tabela se ela não existir
        $columnsSql = [];
        foreach ($columns as $name => $type) {
            $columnsSql[] = "$name $type";
        }
        $sql = "CREATE TABLE $tableName (" . implode(', ', $columnsSql) . ")";
        sqlite_query($db, $sql);
        echo "Tabela '$tableName' criada com sucesso.\n";
    } else {
        // Sincroniza as colunas existentes
        $existingColumns = getTableColumns($db, $tableName);
        
        // Adicionar colunas que existem apenas no schema
        foreach ($columns as $name => $type) {
            if (!array_key_exists($name, $existingColumns)) {
                sqlite_query($db, "ALTER TABLE $tableName ADD COLUMN $name $type");
                echo "Coluna '$name' adicionada na tabela '$tableName'.\n";
            }
        }
        
        // Remover colunas que não estão mais no schema
        foreach ($existingColumns as $name => $type) {
            if (!array_key_exists($name, $columns)) {
                echo "Nota: A coluna '$name' em '$tableName' não está mais no schema e não será removida automaticamente.\n";
            }
        }
    }
}

/**
 * Sincronizar cada tabela no schema
 */
foreach ($schema as $tableName => $columns) {
    syncTable($db, $tableName, $columns);
}

echo "Sincronização do schema concluída.\n";
