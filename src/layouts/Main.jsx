import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/pages/shared/Navbar";
import Footer from "../components/pages/shared/Footer";
import { ScrollRestoration } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default Main;
