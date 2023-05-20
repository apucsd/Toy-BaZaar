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
      <div className="grid md:grid-cols-2 gap-4 justify-center items-center bg-blue-50 rounded-lg p-6 shadow-md">
        <div className="space-y-4 md:p-8">
          <h2 className="text-3xl font-bold mb-4">{toy?.toyName}</h2>

          <hr />
          <p className="text-lg font-bold text-red-600 mb-2">
            Price: ${toy?.price}
          </p>
          <p className="text-lg">Ratings: {toy.rating}</p>
          <h3 className="text-xl font-bold underline">Detail description:</h3>

          <p className="text-sm mb-2">{toy?.details}</p>
          <p className="text-lg font-bold text-green-500 flex justify-between">
            <span> Available Quantity:</span> <span>{toy.quantity}</span>
          </p>
          <div>
            <h3 className="text-xl font-bold">Seller Info:</h3>
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
            <button className="bg-fuchsia-500 hover:bg-purple-600 text-white py-3 px-6 rounded-full shadow-lg">
              <span className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 mr-2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <path d="M12 8v8M8 12h8" />
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
