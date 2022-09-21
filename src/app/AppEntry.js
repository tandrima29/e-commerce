import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";

function LoggedInRoutes() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
function NotLoggedInRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="aboout" element={<About />} />
    </Routes>
  );
}

export default function AppEntry() {
  const [isUserLoggedIn, updateLoggedInStatus] = useState(true);
  return (
    <div>{isUserLoggedIn ? <LoggedInRoutes /> : <NotLoggedInRoutes />}</div>
  );
}
