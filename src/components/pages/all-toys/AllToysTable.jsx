/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const AllToysTable = ({ toy }) => {
  const { user } = useContext(AuthContext);
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
  } = toy;
  // console.log(toy);
  const handleToast = () => {
    if (!user) {
      toast.error("You have to log in first to view details");
    }
  };
  return (
    <tr>
      <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 font-medium">
        {sellerName}
      </td>
      <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 font-medium text-gray-800">
        {toyName}
      </td>
      <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 font-medium text-gray-800">
        {category.value}
      </td>
      <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 font-medium text-gray-800">
        {quantity}
      </td>
      <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 font-medium text-gray-800">
        {price}
      </td>
      <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 font-medium cursor-pointer">
        <span className="inline-block rounded-full py-1 px-3 text-xs font-semibold text-white bg-pink-500">
          <Link onClick={handleToast} to={`/toys/${_id}`}>
            Details
          </Link>
        </span>
      </td>
    </tr>
  );
};

export default AllToysTable;
