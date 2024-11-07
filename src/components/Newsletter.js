import { useState, useEffect } from "react";
import { Col, Row} from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email
      })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <div className="localizacao">
              <h2>Endereço</h2>
              <p>Rua Major Carvalho Filho n. 1667 - Centro</p>
              <p>Araraquara -SP</p>
              <p className="horario">Horário de Funcionamento:</p>
              <p>Segunda a Sexta - 08:00 às 18:00</p>
              <p>Sábado - 09:00 às 13:00</p>
          </div>
        </Col>
        <Col md={6} xl={7}>
        <iframe title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.0735624786253!2d-48.17937222472249!3d-21.7774137800658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8f15ce4cff8cb%3A0xcdcf651fd94d32ea!2sR.%20Maj.%20Carvalho%20Filho%2C%201667%20-%20Centro%2C%20Araraquara%20-%20SP%2C%2014802-412!5e0!3m2!1spt-PT!2sbr!4v1712193955091!5m2!1spt-PT!2sbr" width="600" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Col>
      </Row>
    </div>
      </Col >
  )
}