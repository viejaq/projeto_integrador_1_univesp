import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contatoImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import InputMask from 'react-input-mask';

export const Contato = () => {

  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});

  const enviarFormulario = async (e) => {
    e.preventDefault();
    setButtonText("Enviando...");

    let dados = {

      nome: document.getElementById('nome').value,
      cidade: document.getElementById('cidade').value,
      whatsapp: document.getElementById('whatsapp').value,
      email: document.getElementById('email').value,
      mensagem: document.getElementById('mensagem').value

    };

    let response = await fetch("http://localhost:3030/dados_cliente", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },

      body: JSON.stringify(dados)

    });
    setButtonText("Enviado!");
  };

  return (
    <section className="contato" id="contato">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contatoImg} alt="Contato"/>
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
                      <input id='nome' type="text" placeholder="Nome" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input id='cidade' type="text" placeholder="Cidade"/>
                    </Col> 
                    <Col size={12} sm={6} className="px-1 mb-3">
                      <InputMask id='whatsapp' mask="(99) 99999-9999" placeholder="WhatsApp" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input id='email' type="email" placeholder="E-mail"/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea id='mensagem' rows="6" placeholder="Mensagem"></textarea>
                      <button onClick={enviarFormulario}><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
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