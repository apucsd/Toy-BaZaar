/* eslint-disable no-irregular-whitespace */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/Screenshot 2023-05-17 213319.jpg";

const Navbar = () => {
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
              <li>
                <Link to="/my-toys">My Toys</Link>
              </li>
              <li>
                <Link to="/add-toy">Add Toy</Link>
              </li>
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
          <span className="myBtn p">
            <Link to="/login">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
