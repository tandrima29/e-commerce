import Image1 from "../../Images/pic1.jpg";
import Image2 from "../../Images/image2.jpg";
import Image3 from "../../Images/pic3.jpg";
import CustomCard from "./Card";

const cardDetails = [
  {
    heading: "Gym Weight",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    img: Image1,
    review: 45,
    price: 600,
  },
  {
    heading: "Nike Shoes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    img: Image2,
    review: 67,
    price: 456,
  },
  {
    heading: "Addidas Shoes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    img: Image3,
    review: 23,
    price: 900,
  },
];
export default function ProductCard() {
  return (
    <div className="bg-light">
      <div className="container py-5">
        <div className="row text-center py-3">
          <div className="col-lg-6 m-auto">
            <h2>Featured Product</h2>
            <p>
              Reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
        </div>
        <div className="row">
          {cardDetails.map((details, index) => {
            return (
              <div key={index} className="col-12 col-md-4 mb-4">
                <CustomCard
                  heading={details.heading}
                  para={details.description}
                  review={details.review}
                  image={details.img}
                  price={details.price}
                ></CustomCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
