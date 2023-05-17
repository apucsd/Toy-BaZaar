/* eslint-disable react/no-unknown-property */
/* eslint-disable no-irregular-whitespace */
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.css";
import { toast } from "react-hot-toast";
import { Tooltip } from "primereact/tooltip";
import { Button } from "primereact/button";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  console.log(user);

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
    <div>
      <div className="text-center my-2">
        <div>
          <h1 className="text-2xl md:text-5xl tracking-wide font-bold">
            Ｔｏｙ ＢａＺａａｒ
          </h1>
          <p className="text-sky-400 my-2 ">
            ​🇹​​🇴​​🇾​​🇸​ ​🇬​​🇦​​🇱​​🇴​​🇷​​🇪 ​⦂
            ​🇺​​🇳​​🇱​​🇪​​🇦​​🇸​​🇭​ ​🇾​​🇴​​🇺​​🇷​
            ​🇮​​🇲​​🇦​​🇬​​🇮​​🇳​​🇦​​🇹​​🇮​​🇴​​🇳
          </p>
        </div>
        <hr /> <hr />
      </div>
      <div className="navbar bg-base-100 p-3 lato">
        <div className="navbar-start">
          <div className="dropdown">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li>
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
                <Link to="/blog">Login</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center md:block hidden">
          <ul className="flex gap-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "border-b-2 border-blue-400"
                    : ""
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
                    ? "border-b-2 border-blue-400"
                    : ""
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
                        ? "border-b-2 border-blue-400"
                        : ""
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
                        ? "border-b-2 border-blue-400"
                        : ""
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
                    ? "border-b-2 border-blue-400"
                    : ""
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-4">
              <div className="relative">
                {/* <img
                  data-tip={user.displayName}
                  className="tooltip object-cover w-10 h-10 rounded-full ring ring-gray-300 dark:ring-gray-600"
                  src={user?.photoURL}
                  alt=""
                /> */}
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
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded whitespace-nowrap"
                  >
                    <li className="">{user?.displayName}</li>
                  </ul>
                </div>
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 absolute right-0 ring-1 ring-white bottom-0"></span>
              </div>
              <span onClick={handleLogOut} className="myBtn ">
                <Link to="/login">Logout</Link>
              </span>
            </div>
          ) : (
            <span className="myBtn ">
              <Link to="/login">Login</Link>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
