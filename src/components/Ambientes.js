import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { AmbientesCard } from "./AmbientesCard";
import React, { useState } from 'react';

import coz1 from "../assets/img/coz1.png";
import projImg2 from "../assets/img/imagem4.jpg";
import projImg3 from "../assets/img/imagem5.jpg";
import coz2 from "../assets/img/coz2.png";
import projImg5 from "../assets/img/imagem3.jpg";
import coz3 from "../assets/img/coz3.png";
import sala1 from "../assets/img/sala1.jpg";
import sala2 from "../assets/img/sala2.jpg";
import sala3 from "../assets/img/sala3.jpg";
import sala4 from "../assets/img/sala4.jpg";
import sala5 from "../assets/img/sala5.jpg";
import sala6 from "../assets/img/sala6.jpg";
import dorm1 from "../assets/img/dorm1.jpg";
import dorm2 from "../assets/img/dorm2.jpg";
import dorm3 from "../assets/img/dorm3.jpg";
import dorm4 from "../assets/img/dorm4.jpg";
import dorm5 from "../assets/img/dorm5.jpg";
import dorm6 from "../assets/img/dorm6.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Ambientes = () => {

  const cozinhas = [
    {
      title: "Cozinha",
      description: "Design & Development",
      imgUrl: coz1,
    },
    {
      title: "Cozinha",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Cozinha",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Cozinha",
      description: "Design & Development",
      imgUrl: coz2,
    },
    {
      title: "Cozinha",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Cozinha",
      description: "Design & Development",
      imgUrl: coz3,
    },
  ];

  const salas = [
    {
      title: "Sala",
      description: "Design & Development",
      imgUrl: sala1,
    },
    {
      title: "Sala",
      description: "Design & Development",
      imgUrl: sala2,
    },
    {
      title: "Sala",
      description: "Design & Development",
      imgUrl: sala3,
    },
    {
      title: "Sala",
      description: "Design & Development",
      imgUrl: sala4,
    },
    {
      title: "Sala",
      description: "Design & Development",
      imgUrl: sala5,
    },
    {
      title: "Sala",
      description: "Design & Development",
      imgUrl: sala6,
    },
  ];

  const dormitorios = [
    {
      title: "Dormitório",
      description: "Design & Development",
      imgUrl: dorm1,
    },
    {
      title: "Dormitório",
      description: "Design & Development",
      imgUrl: dorm2,
    },
    {
      title: "Dormitório",
      description: "Design & Development",
      imgUrl: dorm3,
    },
    {
      title: "Dormitório",
      description: "Design & Development",
      imgUrl: dorm4,
    },
    {
      title: "Dormitório",
      description: "Design & Development",
      imgUrl: dorm5,
    },
    {
      title: "Dormitório",
      description: "Design & Development",
      imgUrl: dorm6,
    },
  ];

  return (
    <section className="ambientes" id="ambientes_id">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Ambientes</h2>
                  <p>Trabalhando em estreita colaboração com o cliente, nossos arquitetos trazem à vida soluções de mobiliário que refletem seu estilo e necessidades.</p>
                  <Tab.Container id="ambientes-tabs" defaultActiveKey="cozinhas">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="cozinhas">Cozinhas</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="salas">Salas</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="dormitorios">Dormitórios</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="cozinhas">
                        <Row>
                          {cozinhas.map((ambiente, index) => (
                            <AmbientesCard key={index} {...ambiente} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="salas">
                        <Row>
                          {salas.map((ambiente, index) => (
                            <AmbientesCard key={index} {...ambiente} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="dormitorios">
                        <Row>
                          {dormitorios.map((ambiente, index) => (
                            <AmbientesCard key={index} {...ambiente} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
