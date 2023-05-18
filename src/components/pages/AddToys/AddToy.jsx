import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";
import Creatable, { useCreatable } from "react-select/creatable";

export default function AddToy() {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(watch("example")); // watch input value by passing the name of it
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  // console.log(selectedOption);
  const onSubmit = (data) => {
    data.categories = selectedOption;
    console.log(data);
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
            {...register("textAreaID")}
          />
        </div>

        <div className="text-center">
          <input className="myBtn" type="submit" />
        </div>
      </form>
    </div>
  );
}
