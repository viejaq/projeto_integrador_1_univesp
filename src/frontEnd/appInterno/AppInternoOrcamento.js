import '../AppIntOrcamento.css';
import React from 'react';
import { InternoNavBar } from '../appInterno/components/InternoNavBar';

function AppInternoOrcamento() {
    return (
        <div class="app-interno">
            <InternoNavBar />
                <div class="container">
                    <div class="sectionFiltro">
                        <div class="header">
                            <span class="icon">🔍</span>
                            <span>Filtro</span>
                        </div>
                        <div class="filter">
                            <label for="status" class="texto-black">Status Orçamento</label>
                            <select id="status" >
                                <option value="Todos" >Todos</option>
                                <option value="Concluido">Concluído</option>
                                <option value="Pendente">Pendente</option>
                            </select>
                        </div>
                    </div>
                    <div class="section report-table">
                        <div class="header">
                            <span class="icon">📊</span>
                            <span>Relatório de Orçamentos Solicitados</span>
                        </div>
                        <table class="report">
                            <thead>
                                <tr class="texto-black">
                                    <th>DATA SOLICITAÇÃO</th>
                                    <th>NOME CLIENTE</th>
                                    <th>CONTATO</th>
                                    <th>CIDADE</th>
                                    <th>EMAIL</th>
                                    <th>MENSAGEM</th>
                                    <th>STATUS</th>
                                    <th>AÇÃO</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="texto-black">
                                    <td>21/08/2024</td>
                                    <td>Maria Silva</td>
                                    <td>(16) 99743-6743</td>
                                    <td>Araraquara</td>
                                    <td>mariasilva@gmail.com</td>
                                    <td>Gostaria de um orçamento para cozinha.</td>
                                    <td>Concluído</td>
                                    <td><button class="edit-button">✏️ Editar</button></td>
                                </tr>
                                <tr class="texto-black">
                                    <td>08/10/2024</td>
                                    <td>João Moura</td>
                                    <td>(16) 99790-6043</td>
                                    <td>Araraquara</td>
                                    <td>joaomoura@gmail.com</td>
                                    <td>Orçamento para casa completa.</td>
                                    <td>Pendente</td>
                                    <td><button class="edit-button">✏️ Editar</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

        </div >
    )
}

export default AppInternoOrcamento;