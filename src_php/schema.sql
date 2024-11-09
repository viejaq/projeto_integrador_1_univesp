-- Tabela candidato
CREATE TABLE candidato (
    id TEXT PRIMARY KEY NOT NULL,
    nome TEXT NOT NULL,
    whatsapp TEXT NOT NULL,
    email TEXT NOT NULL,
    cargo TEXT NOT NULL,
    mensagem TEXT NOT NULL,
    dt_criacao DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Tabela cliente
CREATE TABLE cliente (
    id TEXT PRIMARY KEY NOT NULL,
    nome TEXT NOT NULL,
    cep TEXT NOT NULL,
    numero TEXT NOT NULL,
    complemento TEXT NOT NULL,
    dt_criacao DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Tabela venda
CREATE TABLE venda (
    id TEXT PRIMARY KEY NOT NULL,
    prazo_entrega DATETIME NOT NULL,
    anexo BLOB NOT NULL,
    co_cliente TEXT NOT NULL,
    dt_criacao DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Tabela status
CREATE TABLE status (
    id TEXT PRIMARY KEY NOT NULL,
    descrcao TEXT NOT NULL,
    dt_criacao DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Tabela atividade
CREATE TABLE atividade (
    id TEXT PRIMARY KEY NOT NULL,
    co_venda TEXT NOT NULL,
    co_status TEXT NOT NULL,
    dt_criacao DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Tabela status_orcamento
CREATE TABLE status_orcamento (
    id TEXT PRIMARY KEY NOT NULL,
    descricao TEXT NOT NULL,
    dt_criacao DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Tabela orcamento
CREATE TABLE orcamento (
    id TEXT PRIMARY KEY NOT NULL,
    nome TEXT NOT NULL,
    cidade TEXT NOT NULL,
    cell TEXT NOT NULL,
    email TEXT NOT NULL,
    mensagem TEXT NOT NULL,
    co_status TEXT NOT NULL,
    dt_criacao DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);
