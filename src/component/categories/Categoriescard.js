import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Categoriescard(props) {
  return (
    <div>
      <Card
        style={{ maxWidth: "18rem", maxheight: "auto" }}
        className="border-0"
      >
        <Card.Img
          variant="top"
          src={props.categoryImage}
          className="rounded-circle border border-1"
        />
        <Card.Body className="text-center">
          <Card.Text>{props.body}</Card.Text>
          <Button variant="success">Shop</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
