<?php
header("Content-Type: application/json");

/**
 * Conectar ao banco SQLite
 */
try {
    $dbPath = __DIR__ . '/../db/minotti.sqlite';
    $db = new SQLite3($dbPath);

    /**
     * Ativa o suporte a foreign keys
     */
    $db->exec('PRAGMA foreign_keys = ON');
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['message' => 'Erro ao conectar ao banco de dados', 'error' => $e->getMessage()]);
    exit;
}

/**
 * Rota GET: Busca os dados de pedido
 */
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        $query = "SELECT * FROM `venda`
                    LEFT JOIN `atividade` ON `venda`.'id_venda' = `atividade`.'cod_venda'
                    LEFT JOIN `status` ON `atividade`.'cod_status' = `status`.'id_status'";
        $results = $db->query($query);

        $dados_pedidos = [];
        while ($row = $results->fetchArray(SQLITE3_ASSOC)) {
            $dados_pedidos[] = $row;
        }

        echo json_encode($dados_pedidos);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['message' => 'Erro ao buscar pedidos', 'error' => $e->getMessage()]);
    }
}
