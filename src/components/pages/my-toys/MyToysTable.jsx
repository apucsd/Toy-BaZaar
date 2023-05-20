/* eslint-disable react/prop-types */
import React from "react";
import { HiCloudArrowUp, HiTrash } from "react-icons/hi2";
import { Link } from "react-router-dom";

const MyToysTable = ({ myToy, handleUpdate, handleDelete }) => {
  const {
    _id,
    toyName,

    price,
    quantity,
    rating,

    date,
  } = myToy;

  return (
    <tr>
      <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 font-medium hover:bg-slate-50 text-gray-800">
        {toyName}
      </td>
      <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 font-medium hover:bg-slate-50">
        {date}
      </td>

      <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 font-medium hover:bg-slate-50 text-gray-800">
        {rating}
      </td>
      <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 font-medium hover:bg-slate-50 text-gray-800">
        {quantity}
      </td>
      <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 font-medium hover:bg-slate-50 text-gray-800">
        $ {price}
      </td>
      <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 font-medium hover:bg-slate-50 cursor-pointer">
        <span className="inline-block rounded-full py-1 px-3 text-xs font-semibold text-white bg-pink-500 cursor-pointer">
          <Link to={`/toys/${_id}`}>All Details</Link>
        </span>
      </td>
      <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 font-medium hover:bg-slate-50 ">
        <label
          htmlFor="my-modal-3"
          className="inline-block rounded-full py-1 px-3 text-md font-semibold text-white bg-green-500 cursor-pointer"
        >
          <HiCloudArrowUp></HiCloudArrowUp>
        </label>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal  modal-lg">
          <div className="modal-box  relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm  absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold text-center text-green-500">
              Update Your Toy
            </h3>
            <form
              id={_id}
              onSubmit={handleUpdate}
              className="max-w-md mx-auto bg-white p-6 rounded-lg"
            >
              <div className="mb-4">
                <label
                  htmlFor="price"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Price:
                </label>
                <input
                  id="price"
                  type="number"
                  step="0.01"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="Enter the price"
                  name="price"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="quantity"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Quantity:
                </label>
                <input
                  id="quantity"
                  type="number"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="Enter the quantity"
                  name="quantity"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="quantity"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Details:
                </label>
                <textarea
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="Details description"
                  name="details"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:bg-indigo-600"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 font-medium hover:bg-slate-50 ">
        <span
          onClick={() => handleDelete(_id)}
          className="inline-block rounded-full py-1 px-3 text-md font-semibold text-white bg-red-500 cursor-pointer"
        >
          <HiTrash></HiTrash>
        </span>
      </td>
    </tr>
  );
};

export default MyToysTable;
