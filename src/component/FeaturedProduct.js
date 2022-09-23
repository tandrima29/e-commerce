import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FeaturedProductCard from "./FeaturedProductCard";
import featuredpruct1 from "../images/feature_prod_01.jpg";
import featuredpruct2 from "../images/feature_prod_02.jpg";
import featuredpruct3 from "../images/feature_prod_03.jpg";

export default function FeaturedProduct() {
  return (
    <div className="row">
      <div className="d-flex flex-column  align-items-center text-center">
        <h2>Featured Product</h2>
        <p>
          Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur..
        </p>
      </div>
      <div className="col-md-4">
        <div className="d-flex justify-content-center">
          <FeaturedProductCard
            Image={featuredpruct1}
            Title="Assesories"
            Desc="Reference site about Lorem Ipsum,
       giving information on its origins."
            Reviwnumbers="47"
          />
        </div>
      </div>
      <div className="col-md-4">
        <div className="d-flex justify-content-center">
          <FeaturedProductCard
            Image={featuredpruct2}
            Title="Watches"
            Desc="Reference site about Lorem Ipsum,
       giving information on its origins."
            Reviwnumbers="29"
          />
        </div>
      </div>
      <div className="col-md-4">
        <div className="d-flex justify-content-center">
          <FeaturedProductCard
            Image={featuredpruct3}
            Title="Electronics"
            Desc="Reference site about Lorem Ipsum,
       giving information on its origins."
            Reviwnumbers="88"
          />
        </div>
      </div>
    </div>
  );
}
