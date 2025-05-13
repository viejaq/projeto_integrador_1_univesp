-- Tabela candidato
CREATE TABLE candidato (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    nome TEXT NOT NULL,
    whatsapp TEXT NOT NULL,
    email TEXT NOT NULL,
    cargo TEXT NOT NULL,
    mensagem TEXT NOT NULL,
    dt_criacao DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Tabela cliente
CREATE TABLE cliente (
    id_cliente INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    nome TEXT NOT NULL,
    cep TEXT NOT NULL,
    numero TEXT NOT NULL,
    complemento TEXT,
    email TEXT,
    tell TEXT NOT NULL
);

-- Tabela venda
CREATE TABLE venda (
    id_venda INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    prazo_entrega DATETIME NOT NULL,
    anexo TEXT,
    co_cliente INTEGER NOT NULL,
    FOREIGN KEY (co_cliente) REFERENCES cliente(id_cliente) ON DELETE RESTRICT ON UPDATE CASCADE
);

-- Tabela status
CREATE TABLE status (
    id_status INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    descricao TEXT NOT NULL
);

-- Tabela atividade
CREATE TABLE atividade (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    cod_venda INTEGER NOT NULL,
    cod_status INTEGER NOT NULL,
    data TIMESTAMP NOT NULL,
    FOREIGN KEY (cod_venda) REFERENCES venda(id_venda) ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY (cod_status) REFERENCES status(id_status) ON DELETE RESTRICT ON UPDATE CASCADE
);
