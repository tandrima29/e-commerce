import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Categoriescard from "./Categoriescard";
import categoryimage1 from "../../images/category_img_01.jpg";
import categoryimage2 from "../../images/category_img_02.jpg";
import categoryimage3 from "../../images/category_img_03.jpg";

const categoryCardDetails = [
  { categoryImage: categoryimage1, body: "Watches" },
  { categoryImage: categoryimage2, body: "Shoes" },
  { categoryImage: categoryimage3, body: "Glasses" },
];

export default function Categories() {
  return (
    <div>
      <div className="container py-5">
        <Row>
          <div className="d-flex flex-column  align-items-center text-center py-3">
            <h2 className="h2">Categories of the month</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <Row>
            {categoryCardDetails.map((details, index) => {
              return (
                <Col
                  xs={12}
                  md={4}
                  key={index}
                  className="pt-3 d-flex justify-content-center align-items-center"
                >
                  <Categoriescard
                    categoryImage={details.categoryImage}
                    body={details.body}
                  ></Categoriescard>
                </Col>
              );
            })}
          </Row>
        </Row>
      </div>
    </div>
  );
}
