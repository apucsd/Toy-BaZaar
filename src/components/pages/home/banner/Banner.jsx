import React from "react";

const Banner = () => {
  return (
    <div className="relative h-screen useBg text-white">
      {/* <img
        className="w-full h-screen rounded"
        src="https://img.freepik.com/free-psd/maternity-baby-shower-background_23-2150237221.jpg?w=900&t=st=1684388201~exp=1684388801~hmac=57c89ca337f74515be0fb1127e8ab3977c255696a2af1c7cf1d71959041f4128"
        alt=""
      /> */}
      <div className="md:w-[70%] mx-auto space-y-6 lato absolute top-[30%] left-12 ">
        <h1 className="md:text-5xl text-3xl">
          Toy Extravaganza: Explore the Ultimate{" "}
          <span className="text-pink-500 font-bold">Toy BaZaar!</span>
        </h1>
        <p>
          Unleash the magic of play at Toy Extravaganza! Explore our
          extraordinary toy bazaar, where wonders abound and imagination knows
          no bounds
        </p>
        <button className="myBtn absolute md:-bottom-32">
          Explore the Fun!
        </button>
      </div>
    </div>
  );
};

export default Banner;
