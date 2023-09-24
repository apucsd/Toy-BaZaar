import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const loadedData = useLoaderData();
  const [toy, setToy] = useState(loadedData);

  //   console.log(toy);
  // picture, toy name, seller name, seller email, price, rating, available quantity, and detail description

  return (
    <div>
      <div className="w-full h-52 bg-[#2BB24C] text-white text-center font  flex justify-center items-center">
        <div>
          <h1 className="text-5xl font-bold bg-[#41BA5E] p-2 px-20 uppercase">
            Toy Bazaar
          </h1>
          <p className=" uppercase font-bold bg-[#41BA5E] p-2 px-20 my-4">
            Make play time a blast with our finest toys and games!
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 justify-center items-center  rounded-lg p-6 shadow-md">
        <div className="space-y-4 md:p-8">
          <h2 className="text-4xl font-extrabold mb-4 uppercase ">
            {toy?.toyName}
          </h2>

          <hr />
          <p className="text-lg font-bold bg-[#12AEE0] p-2 text-white mb-2">
            ${toy?.price}
          </p>

          <h3 className="text-xl font-bold underline uppercase">
            Detail description:
          </h3>

          <p className="text-sm mb-2">{toy?.details}</p>
          <p className="text-lg font-bold text-green-500 flex justify-between uppercase">
            <span> Available Quantity:</span> <span>{toy.quantity}</span>
          </p>
          <div>
            <h3 className="text-xl font-bold uppercase">Seller Info:</h3>
            <hr />
            <hr />
            <p className=" text-slate-600 flex justify-between">
              <span> Name:</span> <span>{toy.sellerName}</span>
            </p>
            <p className=" text-slate-600 flex justify-between">
              <span> Email:</span> <span>{toy.sellerEmail}</span>
            </p>
          </div>

          <div className="flex flex-wrap justify-around">
            <button className="myBtn text-white py-3 px-6 rounded-full shadow-lg">
              <span className="flex items-center justify-center gap-3">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l3.38 13.52a2.997 2.997 0 0 0 2.85 2.01h7.56a3 3 0 0 0 2.85-2.01L23 3H6" />
                </svg>
                Buy Now
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            className="md:w-1/2 mx-auto border-2 rounded-sm border-blue-400"
            src={toy?.imgURL}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
