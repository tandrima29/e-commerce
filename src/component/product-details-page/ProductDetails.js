import { FaStar } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductDetails() {
  const [productDetails, updateProductDetails] = useState([]);

  useEffect(() => {
    axios
      .get("https://633092a2591935f3c891ff0d.mockapi.io/product-details")
      .then((response) => {
        const result = response.data;
        // console.log(response.data.images);

        updateProductDetails(result);
      })
      .catch((error) => {});
  }, []);
  return (
    <div className="card">
      <div className="card-body">
        <h1 className="h2">{productDetails.label}</h1>
        <p className="h3 py-2">${productDetails.originalPrice}</p>
        <p className="py-2">
          <FaStar className="text-warning me-1" />
          <FaStar className="text-warning me-1" />
          <FaStar className="text-warning me-1" />
          <FaStar className="text-warning me-1" />
          <FaStar />
          <span className="list-inline-item text-dark mx-2">
            {" "}
            Rating {productDetails.rating} | {productDetails.totalReview}{" "}
            Comments
          </span>
        </p>

        <ul className="list-inline">
          <li className="list-inline-item">
            <h6>Brand:</h6>
          </li>
          <li className="list-inline-item">
            <p className="text-muted">
              <strong>Easy Wear</strong>
            </p>
          </li>
        </ul>
        <p></p>

        <h6>Description:</h6>
        <p>
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse. Donec condimentum elementum convallis. Nunc sed orci a
          diam ultrices aliquet interdum quis nulla. */}
          {productDetails.desc}
        </p>

        <ul className="list-inline">
          <li className="list-inline-item">
            <h6>Avaliable Color :</h6>
          </li>
          <li className="list-inline-item">
            <p className="text-muted">
              <strong>White / Black</strong>
            </p>
          </li>
        </ul>

        <h6>Specification:</h6>
        <ul className="list-unstyled pb-3">
          <li>Lorem ipsum dolor sit</li>
          <li>Amet, consectetur</li>
          <li>Adipiscing elit,set</li>
          <li>Duis aute irure</li>
          <li>Ut enim ad minim</li>
          <li>Dolore magna aliqua</li>
          <li>Excepteur sint</li>
        </ul>
        <form action="" method="GET">
          <input type="hidden" name="product-title" value="Activewear" />
          <Row>
            <Col xs={12} md={12}>
              <ul className="list-inline pb-3">
                <li className="list-inline-item">
                  Size :
                  <input
                    type="hidden"
                    name="product-size"
                    id="product-size"
                    value="S"
                  />
                </li>

                <li className="list-inline-item">
                  <span className="btn btn-success btn-size">S</span>
                </li>
                <li className="list-inline-item">
                  <span className="btn btn-success btn-size">M</span>
                </li>
                <li className="list-inline-item">
                  <span className="btn btn-success btn-size">L</span>
                </li>
                <li className="list-inline-item">
                  <span className="btn btn-success btn-size">XL</span>
                </li>
              </ul>
            </Col>
            <div className="col-auto">
              <ul className="list-inline pb-3">
                <li className="list-inline-item text-right">
                  Quantity
                  <input
                    type="hidden"
                    name="product-quanity"
                    id="product-quanity"
                    value="1"
                  />
                </li>
                <li className="list-inline-item">
                  <span className="btn btn-success" id="btn-minus">
                    -
                  </span>
                </li>
                <li className="list-inline-item">
                  <span className="badge bg-secondary" id="var-value">
                    1
                  </span>
                </li>
                <li className="list-inline-item">
                  <span className="btn btn-success" id="btn-plus">
                    +
                  </span>
                </li>
              </ul>
            </div>
          </Row>
          <div className="row pb-3">
            <div className="col d-grid">
              <button
                type="submit"
                className="btn btn-success btn-lg"
                name="submit"
                value="buy"
              >
                Buy
              </button>
            </div>
            <div className="col d-grid">
              <button
                type="submit"
                className="btn btn-success btn-lg"
                name="submit"
                value="addtocard"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
