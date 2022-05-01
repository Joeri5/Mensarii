import React from "react";
import { Link } from "react-router-dom";
import { Business, Google } from "../assets";

const WelcomePage = () => {
  return (
    <div className="bg-java h-full overflow-hidden">
      <div className="w-80 py-10 md:flex md:bg-white md:w-screen md:h-full md:justify-end md:absolute">
        <img
          src={Business}
          alt=""
          className="md:object-contain md:w-1/2 flex justify-center md:justify-start"
        />
      </div>
      <div className="flex flex-col text-white mx-5 md:relative md:w-1/2 md:h-screen md:mx-0 md:bg-java md:py-80 md:items-center">
        <div className="md:flex md:flex-col md:items-start md:w-1/2">
          <h1 className="text-2xl font-semibold md:text-3xl">Welcome</h1>
          <div className="my-5">
            <p className="md:text-xl">Manage your expenses</p>
            <h3 className="text-xl md:text-2xl font-medium">
              Seamlessly & intuitively
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-3 my-5 md:w-1/2 md:mx-5">
          <button className="flex gap-10 items-center py-3 w-full bg-white text-java rounded-xl">
            <div className="flex items-center w-full">
              <div className="flex mx-3 justify-start">
                <img src={Google} alt="" className="w-7 h-7" />
              </div>
              <div className="text-center w-full -ml-10">
                <p>Sign in with Google</p>
              </div>
            </div>
          </button>
          <Link to="/signup">
            <button className="py-3 w-full bg-java border-2 border-white rounded-xl">
              Create an account
            </button>
          </Link>
        </div>
        <div className="flex items-center justify-center pb-5 text-sm md:w-1/2 md:mx-5 ">
          <span className="opacity-70">Already have an account&nbsp;</span>
          <Link to="/login" className=" text-opacity-100">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
