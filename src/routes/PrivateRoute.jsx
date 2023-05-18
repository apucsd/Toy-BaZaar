/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loader } = useContext(AuthContext);
  if (loader) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex space-x-2">
          <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce"></div>
          <div className="w-4 h-4 rounded-full bg-green-500 animate-bounce"></div>
          <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce"></div>
        </div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" replace state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
