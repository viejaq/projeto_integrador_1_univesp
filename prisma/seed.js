const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // 1. Inserir status
  const status = [
    'Aguardando Medição Final',
    'Aguardando Aprovação Cliente',
    'Aguardando Fabricação',
    'Entrega',
    'Montagem Agendada',
    'Finalizado'
  ];

  for (let i = 0; i < status.length; i++) {
    await prisma.status.upsert({
      where: { id_status: i + 1 },
      update: {},
      create: {
        id_status: i + 1,
        descricao: status[i],
      },
    });
  }

  // 2. Inserir clientes
  const clientes = [
    {
      id_cliente: 1,
      nome: "Ana",
      cep: "12345-000",
      numero: "100",
      complemento: "Casa",
      tell: "(11) 91234-5678",
      email: "ana@example.com"
    },
    {
      id_cliente: 2,
      nome: "Bruno",
      cep: "23456-111",
      numero: "200",
      complemento: "Apto 21",
      tell: "(11) 92345-6789",
      email: "bruno@example.com"
    },
    {
      id_cliente: 3,
      nome: "Clara",
      cep: "34567-222",
      numero: "150",
      complemento: null,
      tell: "(11) 93456-7890",
      email: "clara@example.com"
    },
    {
      id_cliente: 4,
      nome: "Diego",
      cep: "45678-333",
      numero: "99",
      complemento: "Fundos",
      tell: "(11) 94567-8901",
      email: "diego@example.com"
    },
    {
      id_cliente: 5,
      nome: "Eva",
      cep: "56789-444",
      numero: "101",
      complemento: "Bloco C",
      tell: "(11) 95678-9012",
      email: "eva@example.com"
    }
  ];

  for (const cliente of clientes) {
    await prisma.cliente.create({ data: cliente });
  }

  // 3. Inserir vendas
  const vendas = [];
  let idVenda = 101;
  for (let cliente of clientes) {
    vendas.push(
      { id_venda: idVenda, prazo_entrega: new Date('2025-04-10'), anexo: null, co_cliente: cliente.id_cliente },
      { id_venda: idVenda + 1, prazo_entrega: new Date('2025-04-20'), anexo: null, co_cliente: cliente.id_cliente }
    );
    idVenda += 2;
  }

  for (const venda of vendas) {
    await prisma.venda.create({ data: venda });
  }

  // 4. Inserir atividades
  const atividadesJson = [
    { "cod_venda": 101, "cod_status": 1, "data": "2025-03-25" },
    { "cod_venda": 101, "cod_status": 2, "data": "2025-03-28" },
    { "cod_venda": 101, "cod_status": 3, "data": "2025-04-02" },
    { "cod_venda": 101, "cod_status": 4, "data": "2025-04-10" },
    { "cod_venda": 101, "cod_status": 5, "data": "2025-04-12" },
    { "cod_venda": 101, "cod_status": 6, "data": "2025-04-15" },

    { "cod_venda": 102, "cod_status": 1, "data": "2025-03-26" },
    { "cod_venda": 102, "cod_status": 2, "data": "2025-03-30" },
    { "cod_venda": 102, "cod_status": 3, "data": "2025-04-05" },
    { "cod_venda": 102, "cod_status": 4, "data": "2025-05-05" },
    { "cod_venda": 102, "cod_status": 5, "data": "2025-05-08" },
    { "cod_venda": 102, "cod_status": 6, "data": "2025-05-10" },

    { "cod_venda": 103, "cod_status": 1, "data": "2025-04-01" },
    { "cod_venda": 103, "cod_status": 2, "data": "2025-04-04" },
    { "cod_venda": 103, "cod_status": 3, "data": "2025-04-10" },
    { "cod_venda": 103, "cod_status": 4, "data": "2025-05-28" },
    { "cod_venda": 103, "cod_status": 5, "data": "2025-05-30" },
    { "cod_venda": 103, "cod_status": 6, "data": "2025-06-01" },

    { "cod_venda": 104, "cod_status": 1, "data": "2025-04-03" },
    { "cod_venda": 104, "cod_status": 2, "data": "2025-04-06" },
    { "cod_venda": 104, "cod_status": 3, "data": "2025-04-15" },
    { "cod_venda": 104, "cod_status": 4, "data": "2025-06-10" },
    { "cod_venda": 104, "cod_status": 5, "data": "2025-06-12" },
    { "cod_venda": 104, "cod_status": 6, "data": "2025-06-15" },

    { "cod_venda": 105, "cod_status": 1, "data": "2025-05-05" },
    { "cod_venda": 105, "cod_status": 2, "data": "2025-05-08" },
    { "cod_venda": 105, "cod_status": 3, "data": "2025-05-15" },
    { "cod_venda": 105, "cod_status": 4, "data": "2025-07-01" },
    { "cod_venda": 105, "cod_status": 5, "data": "2025-07-03" },
    { "cod_venda": 105, "cod_status": 6, "data": "2025-07-05" },

    { "cod_venda": 106, "cod_status": 1, "data": "2025-05-10" },
    { "cod_venda": 106, "cod_status": 2, "data": "2025-05-14" },
    { "cod_venda": 106, "cod_status": 3, "data": "2025-05-20" },
    { "cod_venda": 106, "cod_status": 4, "data": "2025-07-15" },
    { "cod_venda": 106, "cod_status": 5, "data": "2025-07-18" },
    { "cod_venda": 106, "cod_status": 6, "data": "2025-07-20" },

    { "cod_venda": 107, "cod_status": 1, "data": "2025-06-01" },
    { "cod_venda": 107, "cod_status": 2, "data": "2025-06-05" },
    { "cod_venda": 107, "cod_status": 3, "data": "2025-06-10" },
    { "cod_venda": 107, "cod_status": 4, "data": "2025-07-28" },
    { "cod_venda": 107, "cod_status": 5, "data": "2025-07-30" },
    { "cod_venda": 107, "cod_status": 6, "data": "2025-08-01" },

    { "cod_venda": 108, "cod_status": 1, "data": "2025-06-03" },
    { "cod_venda": 108, "cod_status": 2, "data": "2025-06-07" },
    { "cod_venda": 108, "cod_status": 3, "data": "2025-06-15" },
    { "cod_venda": 108, "cod_status": 4, "data": "2025-08-08" },
    { "cod_venda": 108, "cod_status": 5, "data": "2025-08-09" },
    { "cod_venda": 108, "cod_status": 6, "data": "2025-08-10" },

    { "cod_venda": 109, "cod_status": 1, "data": "2025-07-01" },
    { "cod_venda": 109, "cod_status": 2, "data": "2025-07-05" },
    { "cod_venda": 109, "cod_status": 3, "data": "2025-07-12" },
    { "cod_venda": 109, "cod_status": 4, "data": "2025-08-28" },
    { "cod_venda": 109, "cod_status": 5, "data": "2025-08-30" },
    { "cod_venda": 109, "cod_status": 6, "data": "2025-09-01" },

    { "cod_venda": 110, "cod_status": 1, "data": "2025-07-10" },
    { "cod_venda": 110, "cod_status": 2, "data": "2025-07-14" },
    { "cod_venda": 110, "cod_status": 3, "data": "2025-07-20" },
    { "cod_venda": 110, "cod_status": 4, "data": "2025-09-10" },
    { "cod_venda": 110, "cod_status": 5, "data": "2025-09-12" },
    { "cod_venda": 110, "cod_status": 6, "data": "2025-09-15" }
  ];

  for (const atividade of atividadesJson) {
    await prisma.atividade.create({
      data: {
        cod_venda: atividade.cod_venda,
        cod_status: atividade.cod_status,
        data: new Date(atividade.data),
      },
    });
  }
}

main()
  .then(() => console.log('Seed executado com sucesso!'))
  .catch((e) => {
    console.error(e);
  })
  .finally(() => prisma.$disconnect());
