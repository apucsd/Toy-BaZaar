/* eslint-disable no-undef */
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";
import Creatable, { useCreatable } from "react-select/creatable";
import { toast } from "react-hot-toast";
import useTitle from "../../../custom hooks/useTitle";

export default function AddToy() {
  useTitle("Add Toy");
  const { user } = useContext(AuthContext);
  // console.log(user);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // console.log(watch("example")); // watch input value by passing the name of it
  const options = [
    { value: "Bears", label: "Bears" },
    { value: "Horses", label: "Horses" },
    { value: "Elephants", label: "Elephants" },
    { value: "Others", label: "Others" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  // console.log(selectedOption);
  const onSubmit = (data) => {
    // console.log(selectedOption);
    data.category = selectedOption;

    fetch("https://toy-bazaar-server.vercel.app/toys", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          toast.success("A new toy has successfully added");
          reset();
        }
      });
  };
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="my-8 bg-blue-50 p-12">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* register your input into the hook by invoking the "register" function */}
        <div className="flex gap-1">
          <input
            required
            placeholder="Toy name"
            {...register("toyName")}
            className="input input-bordered input-info w-full"
          />
          <input
            required
            type="url"
            placeholder="Image URL"
            {...register("imgURL")}
            className="input input-bordered input-info w-full"
          />
        </div>
        <div className="flex gap-1">
          <input
            required
            value={user?.displayName}
            {...register("sellerName")}
            className="input input-bordered input-info w-full"
          />
          <input
            required
            value={user?.email}
            {...register("sellerEmail")}
            className="input input-bordered input-info w-full"
          />
        </div>
        <div className="flex gap-1">
          <input
            required
            placeholder="Price"
            {...register("price")}
            className="input input-bordered input-info w-full"
          />
          <input
            required
            type="date"
            {...register("date")}
            className="input input-bordered input-info w-full"
          />
        </div>
        <div className="flex gap-1">
          <input
            required
            placeholder="Ratings"
            {...register("rating")}
            className="input input-bordered input-info w-full"
          />
          <input
            required
            placeholder="Available quantity"
            {...register("quantity")}
            className="input input-bordered input-info w-full"
          />
        </div>
        <div>
          <Creatable
            className="border border-blue-300 w-full"
            placeholder="Select Category..."
            options={options}
            onChange={setSelectedOption}
          />
        </div>
        <div className="flex gap-1">
          <textarea
            placeholder="Details "
            className="input input-bordered input-info w-full "
            {...register("details")}
          />
        </div>

        <div className="text-center">
          <input required className="myBtn cursor-pointer" type="submit" />
        </div>
      </form>
    </div>
  );
}
