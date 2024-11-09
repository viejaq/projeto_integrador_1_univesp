import './AppIntRH.css';
import React from 'react';
import { InternoNavBar } from '../appInterno/components/InternoNavBar';

function AppInternoRH() {
    return (
        <div class="app-interno">
            <InternoNavBar />

            <div class="container-rh container">

                <h1><span class="icon">📄</span>Currículos Cadastrados</h1>
                <div class="sectionFiltroRH">
                    <div class="header">
                        <span class="icon">🔍</span>
                        <span>Filtro</span>
                    </div>
                    <div class="filter">
                        <div class="linha">
                            <div class="col-4">
                                <label for="filterMonth">Mês:</label>
                                <select id="filterMes">
                                    <option value="Todos">Todos</option>
                                    <option value="janeiro">Janeiro</option>
                                    <option value="fevereiro">Fevereiro</option>
                                    <option value="marco">Março</option>
                                    <option value="abril">Abril</option>
                                    <option value="maio">Maio</option>
                                    <option value="junho">Junho</option>
                                    <option value="julho">Julho</option>
                                    <option value="agosto">Agosto</option>
                                    <option value="setembro">Setembro</option>
                                    <option value="outubro">Outubro</option>
                                    <option value="novembro">Novembro</option>
                                    <option value="dezembro">Dezembro</option>
                                </select>
                            </div>
                            <div class="col-4">
                                <label for="filterMonth">Ano:</label>
                                <select id="filterAno">
                                    <option value="2024">2024</option>
                                </select>
                            </div>
                            <div class="col-4">      
                                <label for="filterCargo" id='labelCargo'>Cargo:</label>
                                <select id="filterCargo">
                                    <option value="">Todos</option>
                                    <option value="vendedor">Vendedor</option>
                                    <option value="montador">Montador</option>
                                    <option value="arquiteto">Arquiteto</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="section report-table">
                    <div class="header">
                        <span class="icon">📊</span>
                        <span>Relatório de Candidatos</span>
                    </div>
                    <table class="report">
                        <thead>
                            <tr class="texto-black">
                                <th>DATA</th>
                                <th>NOME</th>
                                <th>CONTATO</th>
                                <th>CIDADE</th>
                                <th>EMAIL</th>
                                <th>CARGO</th>
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
                                <td>Arquiteta</td>
                                <td>Concluído</td>
                                <td><button class="edit-button">✏️ Editar</button></td>
                            </tr>
                            <tr class="texto-black">
                                <td>08/10/2024</td>
                                <td>João Moura</td>
                                <td>(16) 99790-6043</td>
                                <td>Araraquara</td>
                                <td>joaomoura@gmail.com</td>
                                <td>Montador</td>
                                <td>Pendente</td>
                                <td><button class="edit-button">✏️ Editar</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="responses" style={{ display: 'none' }}></div>
            </div>
        </div >
    )
}

export default AppInternoRH;