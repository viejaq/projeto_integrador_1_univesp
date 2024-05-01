import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contatoImg from '../assets/img/imgTrabalhe.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import InputMask from 'react-input-mask';

export const TrabalheConosco = () => {
  const formInitialDetails = {
    nome: '',
    whatsapp: '',
    email: '',
    cargo: '',
    // message: '',
    file: null // Adicionando um campo para o arquivo
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleFileChange = (e) => {
    setFormDetails({
      ...formDetails,
      file: e.target.files[0] // Armazenando o arquivo selecionado
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Enviando...');
    const formData = new FormData();
    formData.append('nome', formDetails.nome);
    formData.append('whatsapp', formDetails.whatsapp);
    formData.append('email', formDetails.email);
    formData.append('cargo', formDetails.cargo);
    // formData.append('message', formDetails.message);
    formData.append('file', formDetails.file); // Adicionando o arquivo ao FormData

    let response = await fetch('http://localhost:3000/contato', {
      method: 'POST',
      body: formData
    });
    setButtonText('Enviado');
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: 'Orçamento solicitado com sucesso!' });
    } else {
      setStatus({ success: false, message: 'Falha ao enviar' });
    }
  };

  return (
    <section className="contato" id="contato">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => <img className={isVisible ? 'animate__animated animate__zoomIn' : ''} src={contatoImg} alt="Contato" />}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2 className="trabalhe-cns">Trabalhe Conosco</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1 mb-3">
                        <input type="text" value={formDetails.nome} placeholder="Nome" onChange={(e) => onFormUpdate('nome', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <InputMask mask="(99) 99999-9999" placeholder="WhatsApp" onChange={(e) => onFormUpdate('whatsapp', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1 mb-3">
                        <input type="email" value={formDetails.email} placeholder="E-mail" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <select
                          value={formDetails.cargo}
                          onChange={(e) => onFormUpdate('cargo', e.target.value)}
                          placeholder="Cargo"
                        >
                          <option value="">Selecione um cargo</option>
                          <option value="Marceneiro">Marceneiro</option>
                          <option value="Montador">Montador</option>
                          <option value="Vendedor">Vendedor</option>
                          <option value="Arquiteto">Arquiteto</option>
                          <option value="Gerente">Gerente</option>
                        </select>
                      </Col>
                      <Col size={12} sm={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Mensagem" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      </Col>
                      {/* <Col size={12} sm={12} className="px-1">
                        <input type="file" onChange={handleFileChange} />
                      </Col> */}
                      <Col size={12} className="px-1">
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
