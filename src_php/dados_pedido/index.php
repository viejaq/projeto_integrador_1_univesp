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
        /*$query = "SELECT * FROM `venda`
                    LEFT JOIN 
                    (
                        SELECT *
                        FROM `atividade`
                        LEFT JOIN `status` ON `atividade`.'cod_status' = `status`.'id_status'
                        WHERE data IN (
                            SELECT MAX(data)
                            FROM atividade
                            GROUP BY cod_venda
                        )
                    ) a ON `venda`.'id_venda' = a.'cod_venda'"; */
        $query = "WITH atividades_ordenadas AS (
  SELECT 
    a.*, 
    ROW_NUMBER() OVER (PARTITION BY a.cod_venda ORDER BY a.data DESC) AS rn
  FROM atividade a
)
SELECT 
  v.*, 
  a.id AS id_atividade,
  a.cod_status,
  a.data,
  s.descricao AS descricao
FROM venda v
LEFT JOIN atividades_ordenadas a ON v.id_venda = a.cod_venda AND a.rn = 1
LEFT JOIN status s ON a.cod_status = s.id_status
ORDER BY a.data DESC;
";
        $results = $db->query($query);

        $dados_pedidos = [];
        while ($row = $results->fetchArray(SQLITE3_ASSOC)) {
            $row['data'] = $row['prazo_entrega'];
            $dados_pedidos[] = $row;
        }

        echo json_encode($dados_pedidos);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['message' => 'Erro ao buscar pedidos', 'error' => $e->getMessage()]);
    }
}
