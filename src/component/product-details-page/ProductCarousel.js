import { useState, useEffect } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import product_single_01 from "../../images/product_single_01.jpg";
import product_single_02 from "../../images/product_single_02.jpg";
import product_single_03 from "../../images/product_single_03.jpg";
import product_single_05 from "../../images/product_single_05.jpg";
import product_single_06 from "../../images/product_single_06.jpg";
import product_single_07 from "../../images/product_single_07.jpg";
import product_single_04 from "../../images/product_single_04.jpg";
import product_single_08 from "../../images/product_single_08.jpg";
import product_single_09 from "../../images/product_single_09.jpg";
import "../../app/global.css";
export default function ProductCarousel() {
  const [productDetails, updateProductDetails] = useState([]);

  useEffect(() => {
    axios
      .get("https://633092a2591935f3c891ff0d.mockapi.io/product-details")
      .then((response) => {
        const result = response.data.images;
        // console.log(response.data.images);

        updateProductDetails(result);
      })
      .catch((error) => {});
  }, []);
  return (
    <Carousel showArrows={false} showIndicators={false}>
      {productDetails.map((item, index) => {
        return <img src={item} />;
      })}

      {/* <div>
        <img src={product_single_01} />
      </div>
      <div>
        <img src={product_single_02} />
      </div>
      <div>
        <img src={product_single_03} />
      </div>
      <div>
        <img src={product_single_04} />
      </div>
      <div>
        <img src={product_single_05} />
      </div>
      <div>
        <img src={product_single_06} />
      </div>
      <div>
        <img src={product_single_07} />
      </div>
      <div>
        <img src={product_single_08} />
      </div>
      <div>
        <img src={product_single_09} />
      </div> */}
    </Carousel>
  );
}
