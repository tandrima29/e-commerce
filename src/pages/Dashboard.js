import React from "react";
import Footer from "../component/footer/Footer";
import Header from "../component/header/Header";
import SingleProductDetails from "../component/product-details-page/SingleProductDetails";
import About from "./About";
import Home from "./Home";

export default function Dashboard() {
  return (
    <div>
      <Header />
      <Home />
      <SingleProductDetails />
      <About />
      <Footer />
    </div>
  );
}
