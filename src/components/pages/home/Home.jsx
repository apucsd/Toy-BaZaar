import React from "react";
import Banner from "./banner/Banner";
import Gallery from "./Gallery/Gallery";
import Categories from "./Categories/Categories";
import useTitle from "../../../custom hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Categories></Categories>
    </div>
  );
};

export default Home;
