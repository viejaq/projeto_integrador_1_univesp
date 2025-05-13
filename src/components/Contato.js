import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contatoImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import InputMask from 'react-input-mask';

export const Contato = () => {

  const valoresIniciaisForm = {
    nome: '',
    cidade: '',
    whatsapp: '',
    email: '',
    mensagem: ''
  }
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});
  const [dadosFrom, setDadosForm] = useState(valoresIniciaisForm);

  const enviarFormulario = async (e) => {
    e.preventDefault();
    setButtonText("Enviando...");

    let response = await fetch("https://daedaluspi.fclar.unesp.br/api/dados_cliente", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },

      body: JSON.stringify(dadosFrom)

    });
    setButtonText("Enviado!");
    setDadosForm(valoresIniciaisForm)
  };

  const onFormUpdate = (campo, valor) => {
    setDadosForm({
      ...dadosFrom,
      [campo]: valor
    })
  }

  return (
    <section className="contato" id="contato">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contatoImg} alt="Contato" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Solicite seu orçamento</h2>
                  <form>
                    <Row>
                      <Col size={12} sm={6} className="px-1 mb-3">
                        <input id='nome' type="text" placeholder="Nome"
                          value={dadosFrom.nome} onChange={e => { onFormUpdate('nome', e.target.value) }} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input id='cidade' type="text" placeholder="Cidade"
                          value={dadosFrom.cidade} onChange={e => { onFormUpdate('cidade', e.target.value) }} />
                      </Col>
                      <Col size={12} sm={6} className="px-1 mb-3">
                        <InputMask id='whatsapp' mask="(99) 99999-9999" placeholder="WhatsApp"
                          value={dadosFrom.whatsapp} onChange={e => { onFormUpdate('whatsapp', e.target.value) }} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input id='email' type="email" placeholder="E-mail"
                          value={dadosFrom.email} onChange={e => { onFormUpdate('email', e.target.value) }} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea id='mensagem' rows="6" placeholder="Mensagem"
                          value={dadosFrom.mensagem} onChange={e => { onFormUpdate('mensagem', e.target.value) }}></textarea>
                        <button onClick={enviarFormulario}><span>{buttonText}</span></button>
                      </Col>
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
