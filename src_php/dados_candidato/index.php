<?php
header("Content-Type: application/json");

/**
 * Conectar ao banco SQLite
 */
try {
    $db = new SQLite3('../minotti.sqlite');
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['message' => 'Erro ao conectar ao banco de dados', 'error' => $e->getMessage()]);
    exit;
}

/**
 * Rota GET: Busca os dados do candidato
 */
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        $query = "SELECT * FROM candidato";
        $results = $db->query($query);

        $dados_candidato = [];
        while ($row = $results->fetchArray(SQLITE3_ASSOC)) {
            $dados_candidato[] = $row;
        }

        echo json_encode($dados_candidato);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['message' => 'Erro ao buscar candidato', 'error' => $e->getMessage()]);
    }
}

/**
 * Rota POST: Criação de novo candidato
 */
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $nome = $data['nome'];
    $whatsapp = $data['whatsapp'];
    $email = $data['email'];
    $cargo = $data['cargo'];
    $mensagem = $data['mensagem'];

    try {
        $stmt = $db->prepare("INSERT INTO candidato (nome, whatsapp, email, cargo, mensagem) VALUES (:nome, :whatsapp, :email, :cargo, :mensagem)");
        $stmt->bindValue(':nome', $nome, SQLITE3_TEXT);
        $stmt->bindValue(':whatsapp', $whatsapp, SQLITE3_TEXT);
        $stmt->bindValue(':email', $email, SQLITE3_TEXT);
        $stmt->bindValue(':cargo', $cargo, SQLITE3_TEXT);
        $stmt->bindValue(':mensagem', $mensagem, SQLITE3_TEXT);

        $stmt->execute();

        http_response_code(201);
        echo json_encode(['message' => 'Candidato criado com sucesso']);
    } catch (Exception $e) {
        http_response_code(400);
        echo json_encode(['message' => 'Erro ao criar candidato', 'error' => $e->getMessage()]);
    }
}
