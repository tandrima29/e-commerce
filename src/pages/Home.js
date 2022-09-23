import React from "react";
import Categories from "../component/Categories";
import FeaturedProduct from "../component/FeaturedProduct";

export default function Home() {
  return (
    <div className="container">
      <div className="mx-5">
        <Categories />
        <FeaturedProduct />
      </div>
    </div>
  );
}
