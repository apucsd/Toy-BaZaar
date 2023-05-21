import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
// import "aos/dist/aos.css";

const Banner = () => {
  return (
    <div className="relative md:h-screen h-96  useBg text-white">
      <div
        data-aos="fade-up"
        className="md:w-[50%] mx-auto space-y-6  absolute top-[20%] left-10"
      >
        <h1 className="md:text-4xl ">
          Toy Extravaganza: Explore the Ultimate <br />
          <span className="  font-bold">Toy BaZaar!</span>
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
