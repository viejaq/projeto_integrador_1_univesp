import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { AmbientesCard } from "./AmbientesCard";
import projImg1 from  "../assets/img/imagem1.jpg"
import projImg2 from "../assets/img/imagem4.jpg";
import projImg3 from "../assets/img/imagem5.jpg";

import projImg4 from "../assets/img/imagem2.jpg";
import projImg5 from "../assets/img/imagem3.jpg";
import projImg6 from "../assets/img/imagem6.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Ambientes = () => {

  const ambientes = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg6,
    },
   
    
  ];

  return (
    <section className="ambientes" id="ambientes_id">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Ambientes</h2>
                <p>Trabalhando em estreita colaboração com o cliente, nossos arquitetos trazem à vida soluções de mobiliário que refletem seu estilo e necessidades.</p>




                <Tab.Container id="ambientes-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Cozinhas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Closets</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Dormitórios</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="home-offices">Home Offices</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          ambientes.map((ambientes, index) => {
                            return (
                              <AmbientesCard
                                key={index}
                                {...ambientes}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          ambientes.map((ambientes, index) => {
                            return (
                              <AmbientesCard
                                key={index}
                                {...ambientes}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          ambientes.map((ambientes, index) => {
                            return (
                              <AmbientesCard
                                key={index}
                                {...ambientes}
                                />
                            )
                          })
                        }
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