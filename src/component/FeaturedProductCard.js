import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
export default function FeaturedProductCard(props) {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={props.Image} />
        <Card.Body>
          <ul className="list-unstyled d-flex justify-content-between">
            <li>
              <i className="text-warning">
                <FaStar />
              </i>
              <i className="text-warning">
                <FaStar />
              </i>
              <i className="text-warning">
                <FaStar />
              </i>
              <i className="text-warning">
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
            </li>

            <li className="text-muted text-right">$360.00</li>
          </ul>
          <Card.Title>{props.Title}</Card.Title>
          <Card.Text>{props.Desc}</Card.Text>
          <Card.Text>reviews ({props.Reviwnumbers})</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
