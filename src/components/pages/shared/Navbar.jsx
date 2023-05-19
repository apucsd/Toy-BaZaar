/* eslint-disable no-irregular-whitespace */
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Marquee from "react-fast-marquee";

import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.css";
import { toast } from "react-hot-toast";
import { Tooltip } from "primereact/tooltip";
import { Button } from "primereact/button";
import logo from "../../../assets/White logo - no background.png";

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
    <div className="">
      <div className="text-center my-2">
        <div>
          <div className="relative">
            <h1 className="text-2xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-pink-500 p-4 tracking-wide font-bold">
              Ｔｏｙ ＢａＺａａｒ
            </h1>
            <span className="absolute -top-8 start-[20%] ">
              <svg
                fill="#3c42fb"
                width="150px"
                height="150px"
                viewBox="-14.4 -14.4 52.80 52.80"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#3c42fb"
                strokeWidth="0.00024000000000000003"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M8,11V9a1,1,0,0,1,2,0v2a1,1,0,0,1-2,0Zm7,1a1,1,0,0,0,1-1V9a1,1,0,0,0-2,0v2A1,1,0,0,0,15,12Zm8,0A11,11,0,1,1,12,1,11.013,11.013,0,0,1,23,12Zm-2,0a9,9,0,1,0-9,9A9.01,9.01,0,0,0,21,12Zm-9,1.782A3.044,3.044,0,0,0,10,13c-2,0-2,1.333-4,1.333C6,14.333,8,17,10,17a3.044,3.044,0,0,0,2-.782A3.044,3.044,0,0,0,14,17c2,0,4-2.667,4-2.667-2,0-2-1.333-4-1.333A3.044,3.044,0,0,0,12,13.782Z"></path>
                </g>
              </svg>
            </span>
          </div>

          <Marquee speed={100} direction={"right"}>
            <p className="text-sky-400  my-2 ">
              ​🇹​​🇴​​🇾​​🇸​ ​🇬​​🇦​​🇱​​🇴​​🇷​​🇪 ​⦂
              ​🇺​​🇳​​🇱​​🇪​​🇦​​🇸​​🇭​ ​🇾​​🇴​​🇺​​🇷​
              ​🇮​​🇲​​🇦​​🇬​​🇮​​🇳​​🇦​​🇹​​🇮​​🇴​​🇳
            </p>
          </Marquee>
        </div>
        <hr /> <hr />
      </div>
      <div className="navbar myBg text-white p-3 lato my-3">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gradient-to-r from-blue-500 to-blue-400 rounded-box w-52 "
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
