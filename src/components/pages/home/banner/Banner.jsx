import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          style={{
            clipPath:
              "polygon(11% 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 16% 17%)",
          }}
          src="https://img.freepik.com/free-vector/christmas-toys-background-flat-design_23-2148350472.jpg?w=996&t=st=1687957956~exp=1687958556~hmac=d3b4948960388da32f1fcccd07bca3ef22c0f1be2eefda9495c937408667405c"
          className="max-w-xl rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">REIMAGINING PLAY FOR A NEW DAY</h1>
          <p className="py-6">
            Whatever your place in the ecosystem of play — inventor, designer,
            manufacturer, buyer, distributors, entertainment exec, or beyond —
            Toy BaZaar is for you!
          </p>
          <Link to="register">
            <button className="btn border-0 bg-red-600">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
