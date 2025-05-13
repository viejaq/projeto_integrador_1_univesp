import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    PieChart, Pie, Cell, Tooltip,
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend,
    LineChart, Line
} from 'recharts';
import { InternoNavBar } from './components/InternoNavBar';

const STATUS_CORES = {
    'Aguardando Medição Final': '#8884d8',
    'Aguardando Aprovação Cliente': '#82ca9d',
    'Aguardando Fabricação': '#ffc658',
    'Entrega': '#ff8042',
    'Montagem Agendada': '#8dd1e1',
    'Finalizado': '#a4de6c',
};

function AppInternoDashboard() {
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    const [clientes, setClientes] = useState([]);
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        axios.get(`${API_BASE_URL}/dados_cliente`).then(res => setClientes(res.data));
        axios.get(`${API_BASE_URL}/dados_pedido`).then(res => setPedidos(res.data));
    }, []);

  const totalClientes = clientes.length;
  const pedidosPendentes = pedidos.filter(p => p.descricao !== 'Finalizado').length;

  const pedidosPorStatus = Object.keys(STATUS_CORES).map(status => ({
    name: status,
    value: pedidos.filter(p => p.descricao === status).length,
  }));

  const pedidosPorAno = pedidos.reduce((acc, pedido) => {
    const ano = new Date(pedido.data).getFullYear();
    acc[ano] = (acc[ano] || 0) + 1;
    return acc;
  }, {});

  const dadosPorAno = Object.entries(pedidosPorAno).map(([ano, qtd]) => ({
    ano,
    pedidos: qtd,
  }));

  return (
    <div class="app-interno">
    <InternoNavBar />

      <div class="container-rh container">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Resumo</h2>
            <p>Total de clientes: {totalClientes}</p>
            <p>Pedidos pendentes: {pedidosPendentes}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-2">Pedidos por status</h2>
              <PieChart width={400} height={250}>
                <Pie data={pedidosPorStatus} dataKey="value" nameKey="name" outerRadius={80} label>
                  {pedidosPorStatus.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={STATUS_CORES[entry.name]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-2">Pedidos por ano</h2>
              <BarChart width={600} height={300} data={dadosPorAno}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="ano" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pedidos" fill="#8884d8" />
              </BarChart>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AppInternoDashboard;
