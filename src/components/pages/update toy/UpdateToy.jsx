import React from "react";
import { toast } from "react-hot-toast";
import { HiArrowLeft } from "react-icons/hi2";
import { useNavigate, useParams } from "react-router-dom";

const UpdateToy = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;
    const price = parseFloat(form.price.value);
    const quantity = form.quantity.value;
    const details = form.details.value;
    const updateToy = { price, details, quantity };
    // console.log(updateToy, form.id);
    fetch(`https://toy-bazaar-server.vercel.app/toys/${id}`, {
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
        }
      });
    form.reset();
  };
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div onClick={goBack} className="flex items-center gap-2 myBtn">
        <HiArrowLeft></HiArrowLeft>
        <p>Go Back</p>
      </div>
      <form
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
            required
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
            required
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
            required
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
  );
};

export default UpdateToy;
