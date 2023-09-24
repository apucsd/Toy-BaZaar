/* eslint-disable no-irregular-whitespace */
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import topBanner from "../../../assets/bear.png";

import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.css";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  // console.log(user);

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure ?",

      // icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "39B5E0",
      cancelButtonColor: "#A31ACB",
      confirmButtonText: "Yes, Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        logOutUser()
          .then(() => {
            toast.success("Your logout is successful");
          })
          .catch((er) => {});
      }
    });
  };
  return (
    <div className="uppercase">
      <div className="navbar lato">
        <div className="navbar-start">
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 w-60 h-screen p-2 border-r bg-white absolute rounded left-0 right-0 shadow  md:mt-8"
            >
              <li className="pt-10 ">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/all-toys">All Toys</Link>
              </li>
              {user && (
                <span>
                  <li>
                    <Link to="/my-toys">My Toys</Link>
                  </li>
                  <li>
                    <Link to="/add-toy">Add Toy</Link>
                  </li>
                </span>
              )}
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="">
              <Link to="/">
                <img
                  className="md:w-32 md:h-20 h-8 w-12 myPolygon m-auto"
                  src={"/toy-bazar.png"}
                  alt=""
                />
              </Link>
            </h1>
          </div>
        </div>
        <div className="navbar-center  md:block hidden">
          <ul className="flex gap-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "myBtn"
                    : "myBtnHover px-4 py-2"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-toys"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "myBtn"
                    : "myBtnHover px-4 py-2"
                }
              >
                All Toys
              </NavLink>
            </li>
            {user && (
              <span className="flex gap-5">
                <li>
                  <NavLink
                    to="/my-toys"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "myBtn"
                        : "myBtnHover px-4 py-2"
                    }
                  >
                    My Toys
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/add-toy"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "myBtn"
                        : "myBtnHover px-4 py-2"
                    }
                  >
                    Add Toys
                  </NavLink>
                </li>
              </span>
            )}
            <li>
              <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "myBtn"
                    : "myBtnHover px-4 py-2"
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-4 items-center">
              <div className="relative">
                <div className="dropdown dropdown-hover">
                  <label tabIndex={0}>
                    <img
                      className=" object-cover w-10 h-10 rounded-full ring ring-gray-300 dark:ring-gray-600"
                      src={user?.photoURL}
                      alt=""
                    />
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow myBg rounded whitespace-nowrap"
                  >
                    <li className="">{user?.displayName}</li>
                  </ul>
                </div>
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 absolute right-0 ring-1 ring-white bottom-0"></span>
              </div>
              <span
                onClick={handleLogOut}
                className="bg-green-400 text-white md:font-medium rounded-md md:px-4 md:py-2 hover:bg-green-500 transition duration-300 ease-in-out shadow-lg "
              >
                <Link>Logout</Link>
              </span>
            </div>
          ) : (
            <span className="myBtn">
              <Link to="/login">Login</Link>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
