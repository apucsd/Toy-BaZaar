import React from "react";

import logo from "../../../../assets/126767175_padded_logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  AOS.init({ duration: 1000 });
  return (
    <div className=" my-12 py-10">
      <hr className="my-4" />
      <div
        data-aos="fade-up"
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-4xl font-bold mb-8">About Us</h1>

        <div className="flex flex-col sm:flex-row gap-8">
          <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
            <img className="w-full h-auto" src={logo} alt="About Us Image" />
          </div>

          <div className="w-full sm:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>

            <h1 className="text-4xl font-bold my-4 text-blue-600">
              Welcome to Toy BaZaar
            </h1>
            <p className=" mb-6">
              Our story began with a simple idea: to create a magical place
              where children and parents could explore a wide variety of toys
              and games, sparking their creativity and fostering a love for
              learning through play. We wanted to provide a carefully curated
              selection of toys that would engage young minds, promote
              development, and bring smiles to faces.
            </p>
            <p className=" mb-6">
              From humble beginnings, we started as a small toy store in a local
              community, passionate about making a difference lives. As word
              spread about our unique collection and exceptional customer
              service, we quickly gained the trust and loyalty of families near
              and far.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
