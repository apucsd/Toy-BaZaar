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
          <Link to={`/update-toy/${_id}`}>
            <HiCloudArrowUp></HiCloudArrowUp>
          </Link>
        </label>
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
