import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import NavIconT from '../assets/img/icon-voltar.png';
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";

export const InternoNavBar = () => {

  /*const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
*/
  return (
    // <Router>
    <Navbar expand="md" className="scrolled">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          </Nav>
          

          <span className="navbar-text">
            <Navbar.Brand href="/AppInternoOrcamentos">
              <button className="trabalhe_conosco"><span>Orçamentos</span></button>
            </Navbar.Brand>
          </span>

          <span className="navbar-text">
            <Navbar.Brand href="/AppInternoCadastrodeVendas">
              <button className="trabalhe_conosco"><span>Cadastro de Vendas</span></button>
            </Navbar.Brand>
          </span>

          <span className="navbar-text">
            <Navbar.Brand href="/AppInternoStatusPedidos">
              <button className="trabalhe_conosco"><span>Status de Pedidos</span></button>
            </Navbar.Brand>
          </span>

          <span className="navbar-text">
            <Navbar.Brand href="/AppInternoRH">
              <button className="trabalhe_conosco"><span>RH</span></button>
            </Navbar.Brand>
          </span>

          <span className="navbar-text">
          <Navbar.Brand href="/">
            <button className="trabalhe_conosco"><span>Sair</span></button>
          </Navbar.Brand>
          </span>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </Router>
  )
}