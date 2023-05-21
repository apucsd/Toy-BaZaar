import React from "react";
import Banner from "./banner/Banner";

import Categories from "./Categories/Categories";
import useTitle from "../../../custom hooks/useTitle";
import About from "./about-us/About";
import Sponsors from "./sposors/Sponsors";
import DiscountBanner from "./discount-banner/DiscountBanner";
import ShowCase from "./showcase/ShowCase";
import Gallery from "./Gallery/Gallery";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShowCase></ShowCase>
      <DiscountBanner></DiscountBanner>
      <Categories></Categories>
      <Sponsors></Sponsors>
      <About></About>
    </div>
  );
};

export default Home;
