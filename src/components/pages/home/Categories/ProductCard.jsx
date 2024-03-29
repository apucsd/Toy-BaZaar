/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowRight, HiHeart } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductCard = ({ toy }) => {
  AOS.init({ duration: 1000 });
  const [bookMark, setBookMark] = useState(false);
  const { _id, toyName, imgURL, price, category, rating } = toy;
  return (
    <div className="relative mx-auto w-full bg-[#F5F6F8] rounded-md overflow-hidden p-4">
      <Link
        className="hover:opacity-80 transition-opacity duration-300 ease-in-out"
        to={`/toys/${_id}`}
      >
        <div>
          <div data-aos="fade-left" className="relative">
            <img
              src={imgURL}
              alt="Product"
              className="md:w-[230px] w-[300px] h-[180px] object-cover"
            />
            <span
              onClick={() => setBookMark(!bookMark)}
              className={`${
                bookMark ? "text-red-600" : "text-slate-400"
              } absolute top-3 text-2xl right-4 cursor-pointer`}
            >
              <HiHeart></HiHeart>
            </span>
          </div>
          <div className="p-4">
            <div data-aos="fade-right">
              <div className="flex flex-col">
                {" "}
                {/* Added a flex container */}
                <h3 className="text-lg font-medium text-gray-800">{toyName}</h3>
                <br />
                <p className="text-[#2BB24C]">{category?.value}</p>
              </div>
            </div>
            <div className="flex justify-between my-2 items-center">
              <p className="text-red-600 font-bold">${price}</p>
              <div className="flex items-center font-bold">
                <span className="text-yellow-300 ">
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
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
