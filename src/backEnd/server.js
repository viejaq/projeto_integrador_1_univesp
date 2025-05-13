const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3030;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/dados_candidato', async (req, res) => {
  try {
    const dados_candidato = await prisma.candidato.findMany();
    res.json(dados_candidato);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar candidato', error: err });
  }
});

app.post('/dados_candidato', async (req, res) => {
  const { nome, whatsapp, email, cargo, mensagem } = req.body;
  try {
    const newUser = await prisma.candidato.create({
      data: { nome, whatsapp, email, cargo, mensagem },
    });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao criar candidato', error: err });
  }
});

app.get('/cliente', async (req, res) => {
  try {
    const dados_cliente = await prisma.orcamento.findMany();
    res.json(dados_cliente);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar cliente', error: err });
  }
});

app.post('/cliente', async (req, res) => {
  const { nome, cep, numero, tell, email, complemento } = req.body;
  try {
    const newUser = await prisma.cliente.create({
      data: { nome, cep, numero, tell, email, complemento }
    });
    res.status(200).json(newUser);
  } catch (err) {
    console.log(err.stack);
    res.status(400).json({ message: 'Erro ao criar cliente', error: err });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

/*cliente */