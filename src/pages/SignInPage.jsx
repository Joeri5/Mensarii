import React, { useState } from "react";
import firebase from "firebase/compat";
// import { Link } from "react-router-dom";
import { auth } from "../firebase";

import { Google, Github, Facebook } from "../assets";

const SignInPage = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="h-screen bg-white">
      <div className="flex flex-col justify-center">
        <form
          action=""
          className="flex flex-col justify-center gap-3 mx-3 my-3"
        >
          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <input
              className="border-2 py-2 px-3 w-full"
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="">Password</label>
            <input
              className="border-2 py-2 px-3 w-full"
              type="password"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="py-2 px-10 my-5 rounded-xl text-white bg-java-500"
          >
            Sign In
          </button>
        </form>
        <table className="mx-5">
          <tr>
            <td className="w-1/3">
              <hr />
            </td>
            <td className="text-center align-middle">Or Sign In With</td>
            <td className="w-1/3">
              <hr />
            </td>
          </tr>
        </table>
        <div className="flex justify-evenly my-10">
          <button
            onClick={() =>
              auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
            }
            className="flex items-center justify-center shadow-xl rounded-full w-14 h-14 bg-java-500"
          >
            <img src={Google} alt="" className="w-10 h-10" />
          </button>
          <button
            onClick={() =>
              auth.signInWithRedirect(new firebase.auth.GithubAuthProvider())
            }
            className="flex items-center justify-center shadow-xl rounded-full w-14 h-14 bg-java-500"
          >
            <img src={Github} alt="" className="w-10 h-10" />
          </button>
          <button
            onClick={() =>
              auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
            }
            className="flex items-center justify-center shadow-xl rounded-full w-14 h-14 bg-java-500"
          >
            <img src={Facebook} alt="" className="w-10 h-10" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
