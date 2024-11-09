<?php
header("Content-Type: application/json");

require_once '../database.php';
$db = getDatabaseConnection();

/**
 * Rota GET: Busca os dados do cliente
 */
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        $query = "SELECT * FROM cliente";
        $results = $db->query($query);

        $dados_cliente = [];
        while ($row = $results->fetchArray(SQLITE3_ASSOC)) {
            $dados_cliente[] = $row;
        }

        echo json_encode($dados_cliente);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['message' => 'Erro ao buscar cliente', 'error' => $e->getMessage()]);
    }
}

/**
 * Rota POST: Criação de novo cliente
 */
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $nome = $data['nome'];
    $cidade = $data['cidade'];
    $whatsapp = $data['whatsapp'];
    $email = $data['email'];
    $mensagem = $data['mensagem'];

    try {
        $stmt = $db->prepare("INSERT INTO cliente (nome, cidade, whatsapp, email, mensagem) VALUES (:nome, :cidade, :whatsapp, :email, :mensagem)");
        $stmt->bindValue(':nome', $nome, SQLITE3_TEXT);
        $stmt->bindValue(':cidade', $cidade, SQLITE3_TEXT);
        $stmt->bindValue(':whatsapp', $whatsapp, SQLITE3_TEXT);
        $stmt->bindValue(':email', $email, SQLITE3_TEXT);
        $stmt->bindValue(':mensagem', $mensagem, SQLITE3_TEXT);

        $stmt->execute();

        http_response_code(201);
        echo json_encode(['message' => 'Cliente criado com sucesso']);
    } catch (Exception $e) {
        http_response_code(400);
        echo json_encode(['message' => 'Erro ao criar cliente', 'error' => $e->getMessage()]);
    }
}
