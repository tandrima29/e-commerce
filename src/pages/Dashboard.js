import React from "react";
import Footer from "../component/footer/Footer";
import Header from "../component/header/Header";
import ProductDetails from "../component/product-list/ProductDetails";
import Home from "./Home";

export default function Dashboard() {
  return (
    <div>
      <Header />
      {/* <Home /> */}
      <ProductDetails />
      <Footer />
    </div>
  );
}
