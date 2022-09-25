import { FaStar } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function CustomCard(props) {
  return (
    <div className="card h-100">
      <img src={props.image} className="cursor"></img>
      <div className="card-body">
        <Row className="mt-2 mb-3">
          <Col xs={6} className="text-start">
            <FaStar className="text-warning me-1" />
            <FaStar className="text-warning me-1" />
            <FaStar className="text-warning me-1" />
            <FaStar className="text-warning me-1" />
            <FaStar />
          </Col>
          <Col xs={6} className="text-end text-muted">
            ${props.price}
          </Col>
        </Row>
        <h2 className="cursor">{props.heading}</h2>
        <p>{props.para}</p>
        <p className="text-muted">Review({props.review})</p>
      </div>
    </div>
  );
}
