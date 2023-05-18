import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";
import Creatable, { useCreatable } from "react-select/creatable";
import { toast } from "react-hot-toast";

export default function AddToy() {
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
    { value: "superheroes", label: "Superheroes" },
    { value: "Anime and Manga", label: "Anime and Manga" },
    { value: "Video Game Characters", label: "Video Game Characters" },
    { value: "Movie Characters", label: "Movie Characters" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  // console.log(selectedOption);
  const onSubmit = (data) => {
    data.categories = selectedOption;
    // console.log(data);
    fetch("http://localhost:5000/toys", {
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
        }
      });
  };
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="my-8 bg-gray-100 p-12">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* register your input into the hook by invoking the "register" function */}
        <div className="flex gap-1">
          <input
            placeholder="Toy name"
            {...register("toyName")}
            className="input input-bordered input-info w-full"
          />
          <input
            type="url"
            placeholder="Image URL"
            {...register("imgURL")}
            className="input input-bordered input-info w-full"
          />
        </div>
        <div className="flex gap-1">
          <input
            value={user?.displayName}
            {...register("sellerName")}
            className="input input-bordered input-info w-full"
          />
          <input
            value={user?.email}
            {...register("sellerEmail")}
            className="input input-bordered input-info w-full"
          />
        </div>
        <div className="flex gap-1">
          <input
            placeholder="Price"
            {...register("price")}
            className="input input-bordered input-info w-full"
          />
          <input
            type="date"
            {...register("date")}
            className="input input-bordered input-info w-full"
          />
        </div>
        <div className="flex gap-1">
          <input
            placeholder="Ratings"
            {...register("rating")}
            className="input input-bordered input-info w-full"
          />
          <input
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
            isMulti
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
          <input className="myBtn" type="submit" />
        </div>
      </form>
    </div>
  );
}
