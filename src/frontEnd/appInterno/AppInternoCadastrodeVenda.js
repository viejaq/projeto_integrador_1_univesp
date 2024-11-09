import './AppIntCadastro.css';
import React from 'react';
import { InternoNavBar } from './components/InternoNavBar';

function AppInternoCadastrodeVendas() {
    return (
        <div class="app-interno">
            <InternoNavBar />
            <div class="container">
                <div class="section-cadastro">
                    <div class="main-header">
                        <span class="icon">📋</span>
                        <span>Cadastro de Vendas</span>
                    </div>
                    <form>
                        <div class="form-section">
                            <div class="form-header">
                                <span class="icon">📄</span>
                                <span>Dados do Contrato</span>
                            </div>
                            <div class="form-group inline">
                                <label for="codigo-venda">Código da Venda</label>
                                <input type="text" id="codigo-venda" name="codigo-venda"></input>
                            </div>
                            <div class="form-group inline">
                                <label for="data-entrega">Data de Entrega</label>
                                <input type="date" id="data-entrega" name="data-entrega"></input>
                            </div>
                            <div class="form-group inline">
                                <label for="status">Status</label>
                                <select id="status" name="status">
                                    <option value="pendente">Pendente</option>
                                    <option value="concluido">Concluído</option>
                                </select>
                            </div>
                            <div class="form-group full-width">
                                <label for="anexo">Anexar Contrato</label>
                                <input type="file" id="anexo" name="anexo"></input>
                            </div>
                        </div>
                        <div class="form-section">
                            <div class="form-header">
                                <span class="icon">👤</span>
                                <span>Dados do Cliente / Endereço</span>
                            </div>
                            <div class="form-group full-width">
                                <label for="nome-cliente">Nome do Cliente</label>
                                <input type="text" id="nome-cliente" name="nome-cliente"></input>
                            </div>
                            <div class="form-group inline">
                                <label for="cep">CEP</label>
                                <input type="text" id="cep" name="cep"></input>
                            </div>
                            <div class="form-group inline">
                                <label for="logradouro">Logradouro</label>
                                <input type="text" id="logradouro" name="logradouro"></input>
                            </div>
                            <div class="form-group inline">
                                <label for="numero">Número</label>
                                <input type="text" id="numero" name="numero"></input>
                            </div>
                            <div class="form-group inline">
                                <label for="bairro">Bairro</label>
                                <input type="text" id="bairro" name="bairro"></input>
                            </div>
                            <div class="form-group inline">
                                <label for="complemento">Complemento</label>
                                <input type="text" id="complemento" name="complemento"></input>
                            </div>
                            <div class="form-group inline">
                                <label for="cidade">Cidade</label>
                                <input type="text" id="cidade" name="cidade"></input>
                            </div>
                        </div>
                        <div class="form-actions">
                            <button type="submit">Salvar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default AppInternoCadastrodeVendas;