import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import MyToysTable from "./MyToysTable";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.css";

const MyToys = () => {
  const [recall, setRecall] = useState(false);
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/toys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyToys(data);
      });
  }, [user, recall]);

  const handleUpdate = (event) => {
    event.preventDefault();
    // console.log(event.target);
    const form = event.target;
    const id = form.id;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const updateToy = { price, details, quantity };
    // console.log(updateToy, form.id);
    fetch(`http://localhost:5000/toys/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateToy),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Your item has updated successfully");
          setRecall(true);
        }
      });
  };
  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/toys/${_id}`, {
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

  return (
    <div>
      <div>
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
                handleUpdate={handleUpdate}
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
