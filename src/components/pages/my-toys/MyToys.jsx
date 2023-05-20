import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import MyToysTable from "./MyToysTable";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.css";
import useTitle from "../../../custom hooks/useTitle";
import { set } from "react-hook-form";

const MyToys = () => {
  useTitle("My Toys");
  const [recall, setRecall] = useState(false);
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  useEffect(() => {
    fetch(`https://toy-bazaar-server.vercel.app/toys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMyToys(data);
      });
  }, [user, recall]);

  const handleDelete = (_id) => {
    // console.log(_id);
    fetch(`https://toy-bazaar-server.vercel.app/toys/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        Swal.fire({
          title: "Are you sure ?",

          // icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "39B5E0",
          cancelButtonColor: "#A31ACB",
          confirmButtonText: "Yes, Logout",
        }).then((result) => {
          if (result.isConfirmed) {
            if (data.deletedCount > 0) {
              toast.success("Your toy is deleted successfully");
              const remaining = myToys.filter((myToy) => myToy._id != _id);
              setMyToys(remaining);
            }
          }
        });
      });
  };
  const handleChange = (e) => {
    const value = e.target.value;
    // console.log(user);
    fetch(
      `https://toy-bazaar-server.vercel.app/user/toys?email=${user?.email}&sortBy=${value}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMyToys(data);
      });
  };
  // console.log(myToys);
  return (
    <div className="overflow-x-auto">
      <div>
        <div className="flex my-4 justify-center">
          <select
            onChange={handleChange}
            className=" p-3 w-full max-w-xs mx-auto shadow-md rounded-0"
          >
            <option value="ascending">Filter By Price:</option>

            <option value="ascending">Ascending </option>
            <option value="descending">Descending </option>
          </select>
        </div>
        <table className="min-w-full bg-white rounded-lg">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-pink-500 bg-pink-200 text-left rou text-xs leading-4 font-medium text-pink-800 uppercase tracking-wider">
                Toy Name
              </th>
              <th className="px-6 py-3 border-b-2 border-blue-500 bg-blue-200 text-left text-xs leading-4 font-medium text-blue-800 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 border-b-2 border-purple-500 bg-purple-200 text-left text-xs leading-4 font-medium text-purple-800 uppercase tracking-wider">
                Ratings
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
              <th className="px-6 py-3 border-b-2 border-purple-500 bg-purple-200 text-left text-xs leading-4 font-medium text-purple-800 uppercase tracking-wider">
                Update
              </th>
              <th className="px-6 py-3 border-b-2 border-green-500 bg-yellow-300 text-left text-xs leading-4 font-medium text-purple-800 uppercase tracking-wider">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((myToy) => (
              <MyToysTable
                handleDelete={handleDelete}
                key={myToy._id}
                myToy={myToy}
              ></MyToysTable>
            ))}
            {/* <AllToysTable></AllToysTable> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
