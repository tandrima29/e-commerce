import { FaStar } from "react-icons/fa";
export default function CustomCard(props) {
  return (
    <div className="card h-100">
      <img src={props.image} className="cursor"></img>
      <div className="card-body">
        <div className="row mt-2 mb-3">
          <div className="col-6 text-start">
            <FaStar className="text-warning me-1" />
            <FaStar className="text-warning me-1" />
            <FaStar className="text-warning me-1" />
            <FaStar className="text-warning me-1" />
            <FaStar />
          </div>
          <div className="col-6 text-end text-muted">${props.price}</div>
        </div>
        <h2 className="cursor">{props.heading}</h2>
        <p>{props.para}</p>
        <p className="text-muted">Review({props.review})</p>
      </div>
    </div>
  );
}
