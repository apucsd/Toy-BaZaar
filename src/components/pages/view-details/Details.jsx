import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const loadedData = useLoaderData();
  const [toy, setToy] = useState(loadedData);

  console.log(toy);

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-4 justify-center items-center bg-blue-50 text-blue-800 rounded-lg p-6 shadow-md">
        <div className="space-y-4 md:p-8">
          <h2 className="text-3xl font-bold mb-4">{toy?.toyName}</h2>
          <p className="text-sm mb-2">{toy?.details}</p>
          <div className="flex justify-around">
            <p className="text-lg font-bold text-yellow-600">
              Ratings: {toy.rating}
            </p>
            <p className="text-lg font-bold text-green-500">
              Available Quantity: {toy.quantity}
            </p>
            <p className="text-lg font-bold text-red-600 mb-2">
              Price: ${toy?.price}
            </p>
          </div>
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
