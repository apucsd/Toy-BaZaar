/* eslint-disable react/prop-types */
import React from "react";

const AllToysTable = ({ toy }) => {
  const {
    toyName,
    imgURL,
    sellerName,
    sellerEmail,
    price,
    quantity,
    rating,
    category,
  } = toy;
  return (
    <tr>
      <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 font-medium">
        {sellerName}
      </td>
      <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 font-medium text-gray-800">
        {toyName}
      </td>
      <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 font-medium text-gray-800">
        N/A
      </td>
      <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 font-medium text-gray-800">
        {quantity}
      </td>
      <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 font-medium text-gray-800">
        {price}
      </td>
      <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 font-medium cursor-pointer">
        <span className="inline-block rounded-full py-1 px-3 text-xs font-semibold text-white bg-pink-500">
          Details
        </span>
      </td>
    </tr>
  );
};

export default AllToysTable;
