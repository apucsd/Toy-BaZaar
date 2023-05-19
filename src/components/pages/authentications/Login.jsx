import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { toast } from "react-hot-toast";
import SocialLogin from "./SocialLogin";
import useTitle from "../../../custom hooks/useTitle";

const Login = () => {
  useTitle("Login");
  const { logInUser } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logInUser(email, password)
      .then((result) => {
        // console.log(result.user);

        toast.success("Your login has successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message.split(":")[1]);
      });
  };
  return (
    <div>
      <section className="bg-white">
        <div className="container flex items-center justify-center h-[80vh] px-6 mx-auto">
          <form onSubmit={handleLogin} className="w-full max-w-md">
            <div className="flex justify-center mx-auto text-5xl text-[#0060f0e6]">
              <FaUser></FaUser>
            </div>

            <div className="relative flex items-center mt-6">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>

              <input
                required
                type="email"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email address"
                name="email"
              />
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>

              <input
                required
                type="password"
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
                name="password"
              />
            </div>

            <div className="mt-6">
              <input
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                type="submit"
                value="Login"
              />

              <div className="mt-6 text-center ">
                <p>
                  {" "}
                  Do not have an account? <Link to="/register">Register</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
        <SocialLogin></SocialLogin>
      </section>
    </div>
  );
};

export default Login;
