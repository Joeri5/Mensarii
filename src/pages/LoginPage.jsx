import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import React, { useState } from "react";
import { Arrow } from "../assets";

const LoginPage = () => {
  const history = useHistory();
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();

  function login(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, emailInput, passwordInput).catch((e) => {
      console.log(e.message);
    });
  }

  return (
    <div className="bg-white h-screen overflow-hidden">
      <div className="h-1/5 py-10 relative bg-java">
        <div className="px-7">
          <button onClick={() => history.goBack()}>
            <img src={Arrow} alt="" className="w-12" />
          </button>
        </div>
        <h3 className="px-10 my-2 text-2xl font-semibold text-white">Log In</h3>
      </div>
      <div className="h-full flex items-center absolute w-screen bg-java">
        <div className="bg-white rounded-t-3xl relative h-full w-screen px-10 md:flex md:flex-col md:items-center">
          <div className="md:flex md:flex-col md:items-start md:-ml-44">
            <h3 className="text-xl font-semibold pt-10">Welcome Back</h3>
            <p className="text-sm opacity-30 font-light">
              Hello there, log in to continue
            </p>
          </div>
          <div className="py-10">
            <form onSubmit={login} className="">
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="opacity-60 text-gray-400 text-sm">
                  Username or email
                </label>
                <input
                  type="text"
                  placeholder="Enter your username or email"
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full md:w-96 rounded-xl py-3 pl-3 text-sm placeholder-gray-400 placeholder-opacity-60 bg-gray-100 focus:outline-none focus:ring-0 focus:shadow-md transition-shadow"
                />
              </div>
              <div className="flex flex-col gap-2 pt-5">
                <label htmlFor="" className="opacity-60 text-gray-400 text-sm">
                  Password
                </label>
                <input
                  type="password"
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full rounded-xl py-3 pl-3 text-sm placeholder-gray-400 placeholder-opacity-60 bg-gray-100 focus:outline-none focus:ring-0 focus:shadow-md transition-shadow"
                />
              </div>
              <p className="py-5 text-sm text-java">Forgot Password?</p>
              <button
                type="submit"
                className="w-full py-3 bg-java rounded-2xl text-white"
              >
                Log In
              </button>
            </form>
            <div className="flex items-center justify-center text-sm pt-32">
              <span className="text-gray-400">
                Don't have an account?&nbsp;
              </span>
              <Link to="/signup" className="text-opacity-100 text-java">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
