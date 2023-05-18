import React, { useState } from "react";
import AllToysTable from "./AllToysTable";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const loadedToys = useLoaderData();
  const [toys, setToys] = useState(loadedToys);
  // Seller: (if available) show the name of the person who posted the toy
  // Toy Name
  // Sub-category
  // Price
  // Available Quantity

  // View Details button
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-pink-500 bg-pink-200 text-left rou text-xs leading-4 font-medium text-pink-800 uppercase tracking-wider">
              Seller
            </th>
            <th className="px-6 py-3 border-b-2 border-blue-500 bg-blue-200 text-left text-xs leading-4 font-medium text-blue-800 uppercase tracking-wider">
              Toy Name
            </th>
            <th className="px-6 py-3 border-b-2 border-purple-500 bg-purple-200 text-left text-xs leading-4 font-medium text-purple-800 uppercase tracking-wider">
              Sub-category
            </th>
            <th className="px-6 py-3 border-b-2 border-blue-500 bg-blue-200 text-left text-xs leading-4 font-medium text-blue-800 uppercase tracking-wider">
              Available Quantity
            </th>
            <th className="px-6 py-3 border-b-2 border-purple-500 bg-purple-200 text-left text-xs leading-4 font-medium text-purple-800 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 border-b-2 border-pink-500 bg-pink-200 text-left text-xs leading-4 font-medium text-pink-800 uppercase tracking-wider">
              View Details
            </th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <AllToysTable key={toy._id} toy={toy}></AllToysTable>
          ))}
          {/* <AllToysTable></AllToysTable> */}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
