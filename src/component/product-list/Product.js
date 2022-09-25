import { FaStar } from "react-icons/fa";

import "./styles.css";

export default function CustomProduct(props) {
  return (
    <div className="card h-100">
      <img src={props.image} className="cursor pic-fluid"></img>

      <div className="card-body">
        <p className="cursor">{props.heading}</p>
        <p>{props.para}</p>
        <div className="d-flex justify-content-center">
          <FaStar className="text-warning me-1" />
          <FaStar className="text-warning me-1" />
          <FaStar className="text-warning me-1" />
          <FaStar className="text-warning me-1" />
          <FaStar />
        </div>
        <p className="text-center">${props.price}</p>
      </div>
    </div>
  );
}
