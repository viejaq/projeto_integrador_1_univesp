<?php

/**
 * Conectar ao banco SQLite
 */
try {
    $dbPath = __DIR__ . '/db/minotti.sqlite';
    $db = new SQLite3($dbPath);

    /**
     * Ativa o suporte a foreign keys
     */
    $db->exec('PRAGMA foreign_keys = ON');
} catch (Exception $e) {
    die("Erro ao abrir o banco de dados SQLite: " . $e->getMessage());
}

function seedDatabase($db) {
    // 1. Inserir status
    $status = [
        'Aguardando Medição Final',
        'Aguardando Aprovação Cliente',
        'Aguardando Fabricação',
        'Entrega',
        'Montagem Agendada',
        'Finalizado'
    ];

    foreach ($status as $i => $descricao) {
        $stmt = $db->prepare("INSERT OR IGNORE INTO status (id_status, descricao) VALUES (:id, :descricao)");
        $stmt->bindValue(':id', $i + 1, SQLITE3_INTEGER);
        $stmt->bindValue(':descricao', $descricao, SQLITE3_TEXT);
        $stmt->execute();
    }

    // 2. Inserir clientes
    $clientes = [
        [1, "Ana", "12345-000", "100", "Casa", "(11) 91234-5678", "ana@example.com"],
        [2, "Bruno", "23456-111", "200", "Apto 21", "(11) 92345-6789", "bruno@example.com"],
        [3, "Clara", "34567-222", "150", null, "(11) 93456-7890", "clara@example.com"],
        [4, "Diego", "45678-333", "99", "Fundos", "(11) 94567-8901", "diego@example.com"],
        [5, "Eva", "56789-444", "101", "Bloco C", "(11) 95678-9012", "eva@example.com"],        
        [6, "Felipe", "67890-555", "88", "Casa 2", "(11) 96789-0123", "felipe@example.com"],
        [7, "Gabriela", "78901-666", "112", "Apto 304", "(11) 97890-1234", "gabriela@example.com"],
        [8, "Henrique", "89012-777", "75", null, "(11) 98901-2345", "henrique@example.com"],
        [9, "Isabela", "90123-888", "59", "Casa Fundos", "(11) 99012-3456", "isabela@example.com"],
        [10, "João", "01234-999", "140", "Bloco D", "(11) 90123-4567", "joao@example.com"]
    ];

    foreach ($clientes as $c) {
        $stmt = $db->prepare("INSERT OR IGNORE INTO cliente (id_cliente, nome, cep, numero, complemento, tell, email)
                              VALUES (:id, :nome, :cep, :numero, :complemento, :tell, :email)");
        $stmt->bindValue(':id', $c[0], SQLITE3_INTEGER);
        $stmt->bindValue(':nome', $c[1], SQLITE3_TEXT);
        $stmt->bindValue(':cep', $c[2], SQLITE3_TEXT);
        $stmt->bindValue(':numero', $c[3], SQLITE3_TEXT);
        $stmt->bindValue(':complemento', $c[4], SQLITE3_TEXT);
        $stmt->bindValue(':tell', $c[5], SQLITE3_TEXT);
        $stmt->bindValue(':email', $c[6], SQLITE3_TEXT);
        $stmt->execute();
    }

    // 3. Inserir vendas
    $idVenda = 101;
    foreach ($clientes as $cliente) {
        for ($j = 0; $j < 2; $j++) {
            $prazo = date('Y-m-d', mt_rand(strtotime('2020-01-01'), strtotime('2025-01-01')));
            $stmt = $db->prepare("INSERT OR IGNORE INTO venda (id_venda, prazo_entrega, anexo, co_cliente)
                                  VALUES (:id, :prazo, NULL, :cliente)");
            $stmt->bindValue(':id', $idVenda, SQLITE3_INTEGER);
            $stmt->bindValue(':prazo', $prazo, SQLITE3_TEXT);
            $stmt->bindValue(':cliente', $cliente[0], SQLITE3_INTEGER);
            $stmt->execute();
            $idVenda++;
        }
    }

    // 4. Inserir atividades
    $atividades = json_decode(file_get_contents(__DIR__ . '/atividades.json'), true);

    foreach ($atividades as $a) {
        $stmt = $db->prepare("INSERT INTO atividade (cod_venda, cod_status, data)
                              VALUES (:venda, :status, :data)");
        $stmt->bindValue(':venda', $a['cod_venda'], SQLITE3_INTEGER);
        $stmt->bindValue(':status', $a['cod_status'], SQLITE3_INTEGER);
        $stmt->bindValue(':data', $a['data'], SQLITE3_TEXT);
        $stmt->execute();
    }

    echo "Seed executado com sucesso!";
}

seedDatabase($db);