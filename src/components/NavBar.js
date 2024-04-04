import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
// import logo2 from '../assets/img/logo_escrito.png'
import navIcon1 from '../assets/img/icon-whatsapp.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Link } from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
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

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
            {/* <img src={logo2} alt="Logo2" className="logo2"/> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#quem_somos" className={activeLink === 'quem_somos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('quem_somos')}>Quem Somos</Nav.Link>
              <Nav.Link href="#ambientes_id" className={activeLink === 'ambientes' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('ambientes')}>Ambientes</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://api.whatsapp.com/send/?phone=5516997751680&text=Ol%C3%A1%2C+Moveis+Minotti.+Gostaria+de+um+atendimento&type=phone_number&app_absent=0"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/moveisminotti/?locale=pt_BR"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/moveisminotti/"><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink to='#contato'>
                <button className="contato_button"><span>Orçamentos</span></button>
              </HashLink>
              <Navbar.Brand href="/trabalhe_conosco">
                <button className="trabalhe_conosco"><span>Trabalhe conosco</span></button>
              </Navbar.Brand>
              {/* <a href="#" target="_blank" rel="noopener noreferrer" className="trabalhe_conosco" onClick={() => window.open("/trabalhe_conosco", "_blank")}>
                <button><span>Trabalhe conosco</span></button>
              </a> */}

            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}