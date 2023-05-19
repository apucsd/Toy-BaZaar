import React from "react";
import Banner from "./banner/Banner";
import Gallery from "./Gallery/Gallery";
import Categories from "./Categories/Categories";
import useTitle from "../../../custom hooks/useTitle";
import About from "./about-us/About";
import Sponsors from "./sposors/Sponsors";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Categories></Categories>
      <Sponsors></Sponsors>
      <About></About>
    </div>
  );
};

export default Home;
