/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiHeart } from "react-icons/hi2";

const ProductCard = ({ toy }) => {
  const [bookMark, setBookMark] = useState(false);
  const {
    _id,
    toyName,
    imgURL,
    sellerName,
    sellerEmail,
    price,
    quantity,
    rating,
    category,
    date,
  } = toy;
  return (
    <div className="relative mx-auto w-full border bg-white  rounded-md overflow-hidden p-4">
      <div className="relative">
        <img
          src={imgURL}
          alt="Product"
          className="md:w-[230px] w-[300px] h-[200px] object-cover"
        />
        <span
          onClick={() => setBookMark(!bookMark)}
          className={`${
            bookMark ? "text-red-600" : "text-slate-400"
          } absolute top-3 text-2xl right-1 cursor-pointer`}
        >
          <HiHeart></HiHeart>
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-800">{toyName}</h3>
        <div className="flex justify-between my-2 items-center">
          <p className="text-red-600">${price}</p>
          <div className="flex items-center my-4">
            <span className="text-yellow-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 mr-1"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0l2.598 7.924h8.404L12.786 12.08l2.56 7.92-8.442-6.12-8.442 6.12 2.56-7.92L-1.002 7.924H7.4L10 0z"
                />
              </svg>
            </span>
            <span className="text-gray-600">{rating}</span>
          </div>
        </div>
        <div className="absolute bottom-1 left-12">
          <button className="myBtn w-full  ">
            <Link to={`/toys/${_id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
