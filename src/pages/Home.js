import React from "react";
import Categories from "../component/categories/Categories";
import ProductCard from "../component/product-card/ProductCard";

export default function Home() {
  return (
    <div className="container">
      <div className="mx-5">
        <Categories />
        <ProductCard />
      </div>
    </div>
  );
}
