import React, { useEffect, useState } from "react";
import AllToysTable from "./AllToysTable";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../custom hooks/useTitle";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useTitle("All Toys");
  useEffect(() => {
    // using static limit 20
    fetch("http://localhost:5000/toys?limit=20")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  // View Details button
  const handleSearch = (event) => {
    const text = event.target.value;
    // console.log(text);
    if (text) {
      fetch(`http://localhost:5000/toys/search/${text}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setToys(data);
        });
    }
  };
  return (
    <div className="overflow-x-auto">
      <div className=" w-full md:w-1/2 mx-auto">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search your query "
          className="my-12 w-full border-2 border-purple-500 rounded-lg py-2 px-4 placeholder-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-colors duration-300 ease-in-out"
        />
      </div>
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
              Category
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
