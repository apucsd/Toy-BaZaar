import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
// import "aos/dist/aos.css";

const Banner = () => {
  return (
    <div className="relative md:h-screen  useBg text-white">
      <div
        data-aos="fade-up"
        className="md:w-[50%] mx-auto space-y-6  absolute top-[20%] left-12 "
      >
        <h1 className="md:text-4xl text-2xl">
          Toy Extravaganza: Explore the Ultimate <br />
          <span className="text-5xl  font-bold">Toy BaZaar!</span>
        </h1>
        <p>
          <small className="">
            Unleash the magic of play at Toy Extravaganza! Explore our
            extraordinary toy bazaar, where wonders abound and imagination knows
            no bounds.
          </small>
        </p>
        <button className="btn btn-warning absolute md:-bottom-20">
          <Link to="/login">Explore the Fun!</Link>
        </button>
      </div>
    </div>
  );
};

export default Banner;
