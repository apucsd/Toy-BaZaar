import React from "react";
import { Link } from "react-router-dom";
import Wave from "react-wavify";

const Banner = () => {
  return (
    <div
      style={{ position: "relative", width: "100%", height: "200px" }}
      className="hero min-h-screen"
    >
      <Wave
        fill="#2BB24C"
        paused={false}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
        options={{
          height: 40,
          amplitude: 40,
          speed: 0.2,
          points: 3,
        }}
      />
      <div className="hero-content flex-col lg:flex-row-reverse text-white ">
        <img
          style={{
            clipPath:
              "polygon(11% 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 16% 17%)",
          }}
          src="https://img.freepik.com/free-vector/christmas-toys-background-flat-design_23-2148350472.jpg?w=996&t=st=1687957956~exp=1687958556~hmac=d3b4948960388da32f1fcccd07bca3ef22c0f1be2eefda9495c937408667405c"
          className="md:w-1/2 rounded-lg shadow-2xl"
        />
        <div className="md:p-40">
          <h1
            style={{ borderRadius: "60px 0 60px 0px" }}
            className="text-5xl font-bold "
          >
            REMAINING PLAY FOR A NEW DAY
          </h1>
          <p className="py-6">
            Make play time a blast with our finest toys and games!
          </p>
          <Link to="register">
            <button className="myBtn">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
