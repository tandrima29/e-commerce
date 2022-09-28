import React from "react";
import AboutBrands from "../component/About-Components/AboutBrands";
import AboutHeader from "../component/About-Components/AboutHeader";
import AboutServices from "../component/About-Components/AboutServices";

export default function About() {
  return (
    <div>
      <AboutHeader />
      <AboutServices />
      <AboutBrands />
    </div>
  );
}
