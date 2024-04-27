import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contatoImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contato = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setButtonText("Enviando...");
  //   let response = await fetch("http://localhost:3000/contato", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify(formDetails),
  //   });
  //   setButtonText("Enviado");
  //   let result = await response.json();
  //   setFormDetails(formInitialDetails);
  //   if (result.code == 200) {
  //     setStatus({ succes: true, message: 'Orçamento solicitado com sucesso!'});
  //   } else {
  //     setStatus({ succes: false, message: 'Falha ao enviar'});
  //   }
  // };

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
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="Nome" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="Cidade"/>
                    </Col> 
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" placeholder="WhatsApp"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" placeholder="E-mail"/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" placeholder="Mensagem"></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
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