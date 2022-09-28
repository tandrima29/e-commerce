import React from "react";
import Footer from "../component/footer/Footer";
import Header from "../component/header/Header";
import ProductDetails from "../component/product-list/ProductDetails";
import SingleProductDetails from "../component/product-details-page/SingleProductDetails";
import About from "./About";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="products" element={<ProductDetails />} />
        <Route path="about" element={<About />} />
        <Route path="product-details" element={<SingleProductDetails />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}
