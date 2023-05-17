import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const { status, error } = useRouteError();
  return (
    <div className="py-12">
      <div className="text-center space-y-3">
        <div className="text-start">
          <Link className="" to="/">
            <button className="myBtn">Go Home</button>
          </Link>
        </div>
        <img
          className="md:w-[50%] mx-auto md:h-[550px]"
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1684345114~exp=1684345714~hmac=680cacb7c8d15aff37c0c90438c7a24b8983fe126faaa5f9a3c31e3075c2fd7f"
          alt=""
        />
        <div>
          <h2>Status: {status}</h2>
          <h3>Message: {error.message}</h3>
        </div>
      </div>
    </div>
  );
};

export default Error;
