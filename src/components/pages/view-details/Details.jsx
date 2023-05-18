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
      <div className="grid md:grid-cols-2 gap-4 justify-center items-center bg-blue-50 text-blue-800 rounded-lg p-6 shadow-md">
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
            <p className="text-lg text-black flex justify-between">
              <span> Name:</span> <span>{toy.sellerName}</span>
            </p>
            <p className="text-lg text-black flex justify-between">
              <span> Email:</span> <span>{toy.sellerEmail}</span>
            </p>
          </div>

          <div className="flex flex-wrap justify-around"></div>
          <ul>
            <span className="font-bold text-black"> Categories:</span>
            {toy?.categories.map((category, index) => (
              <li key={index}>{category.label}</li>
            ))}
          </ul>
        </div>
        <div>
          <img
            className="w-full border-2 rounded-sm border-blue-400 h-96"
            src={toy?.imgURL}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
