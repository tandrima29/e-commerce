import React from "react";
import Categoriescard from "./Categoriescard";
import categoryimage1 from "../../images/category_img_01.jpg";
import categoryimage2 from "../../images/category_img_02.jpg";
import categoryimage3 from "../../images/category_img_03.jpg";

export default function Categories() {
  return (
    <div>
      <div className="row">
        <div className="d-flex flex-column  align-items-center text-center">
          <h2 className="h2">Categories of the month</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        {/* <div className="d-flex justify-content-between"></div> */}
        <div className="col-md-4">
          <div className="d-flex justify-content-center">
            <Categoriescard categoryImage={categoryimage1} body="Watches" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex justify-content-center">
            <Categoriescard categoryImage={categoryimage2} body="Shoes" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex justify-content-center">
            <Categoriescard categoryImage={categoryimage3} body="Glasses" />
          </div>
        </div>
      </div>
    </div>
  );
}
