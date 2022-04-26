import React from "react";
import { signOut } from "firebase/auth";
import { Google } from "../assets";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { Router } from "react-router-dom";

const UserNavbar = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="flex items-center px-2 py-2">
      <img
        className="rounded-full h-10 w-10"
        src={loading ? Google : user?.photoURL || Google}
      />
      <p className="text-xl text-center">{user?.displayName}</p>
      <button
        onClick={() => {
          signOut(auth);
          Router.push("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserNavbar;
