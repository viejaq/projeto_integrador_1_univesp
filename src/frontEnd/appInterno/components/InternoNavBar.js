import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../../assets/img/logo.png';

export const InternoNavBar = () => {
  return (
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
            <Navbar.Brand href="/AppInternoOrcamento">
              <button className="trabalhe_conosco"><span>Orçamentos</span></button>
            </Navbar.Brand>
          </span>

          <span className="navbar-text">
            <Navbar.Brand href="/AppInternoCadastrodeVenda">
              <button className="trabalhe_conosco"><span>Cadastro de Vendas</span></button>
            </Navbar.Brand>
          </span>

          <span className="navbar-text">
            <Navbar.Brand href="/AppInternoStatusPedido">
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
  )
}