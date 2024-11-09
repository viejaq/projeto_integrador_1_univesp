<?php
/**
 * Conexão com o banco de dados em SQLite
 */
function getDatabaseConnection() {
    $dbPath = __DIR__ . '/db/minotti.sqlite';
    $db = new SQLite3($dbPath);

    if (!$db) {
        die("Erro ao conectar com o banco de dados.");
    }

    return $db;
}
