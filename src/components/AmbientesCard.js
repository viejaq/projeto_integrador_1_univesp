import { Col } from "react-bootstrap";

export const AmbientesCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="ambientes-imgbx">
        <img src={imgUrl} />
        <div className="ambientes-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}