import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const from = location?.state?.from?.pathname || "/";
  const { googleLoginUser } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    // Add your Google login logic here
    googleLoginUser()
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
      <div className="divider md:w-1/2 mx-auto">OR</div>
      <div className="flex justify-center my-8">
        <button
          onClick={handleGoogleLogin}
          className="px-4 py-2 border text-ce flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
        >
          <img
            className="w-6 h-6"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="google logo"
          />
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
