import faker from "@faker-js/faker";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import {
  ArrowHome,
  Euro,
  House,
  Logout,
  Plus,
  Shapes,
  User,
  UserCard,
} from "../assets";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const HomePage = () => {
  const [user, loading] = useAuthState(auth);
  const history = useHistory();

  return (
    <div className="overflow-x-hidden">
      <div className="flex my-5 mx-5 justify-between">
        <div className="flex items-center gap-3">
          <img
            src={user?.photoURL}
            alt=""
            className="rounded-full w-10 h-10 bg-java"
          />
          <div className="flex flex-col gap-0">
            <p className="text-sm opacity-60">Welcome back,</p>
            <h3 className="font-semibold">{user?.displayName || user.email}</h3>
          </div>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => {
              signOut(auth);
              history.push("/");
            }}
          >
            <img src={Logout} alt="logout" className="w-7" />
          </button>
        </div>
      </div>
      <div className="px-5 flex gap-5 w-screen">
        <div className="absolute">
          <img src={UserCard} alt="card" className="w-72 h-full" />
        </div>
        <div className="relative pl-5 w-72">
          <p className="text-3xl text-white pt-22 font-semibold">
            $3,986<span className="text-lg opacity-60">.32</span>
          </p>
          <div className="flex pt-14 justify-between items-center">
            <p className="opacity-60 text-xs">Limit - $35.000</p>
            <p className="pr-5 font-semibold opacity-40 text-sm">*3572</p>
          </div>
        </div>
        <div className="bg-other shadow-sm w-8 relative rounded-2xl flex items-center justify-center">
          <img src={Plus} alt="plussign" />
        </div>
      </div>
      <div className="mx-7 my-8 flex justify-between">
        <div className="flex flex-col items-center">
          <div className="shadow-sm flex items-center justify-center w-14 h-14 rounded-xl bg-send">
            <img src={ArrowHome} alt="" className="w-10" />
          </div>
          <p className="text-xs mt-3">Send</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="shadow-sm flex items-center justify-center w-14 h-14 rounded-xl bg-receive">
            <img src={ArrowHome} alt="" className="w-10 transform rotate-90" />
          </div>
          <p className="text-xs mt-3">Receive</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="shadow-sm flex items-center justify-center w-14 h-14 rounded-xl bg-exchange">
            <img src={Euro} alt="" className="w-8" />
          </div>
          <p className="text-xs mt-3">Exchange</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="shadow-sm flex items-center justify-center w-14 h-14 rounded-xl bg-other">
            <img src={Shapes} alt="" className="w-8" />
          </div>
          <p className="text-xs mt-3">Other</p>
        </div>
      </div>
      <div className="mx-5 w-screen flex flex-col">
        <div className="flex">
          <h3 className="text-xl font-semibold mb-2">Goals</h3>
        </div>
        <div className="mt-2 flex">
          <div className="w-16 h-14 bg-black rounded-xl flex justify-center items-center">
            <img src={House} alt="house icon" className="w-9" />
          </div>
          <div className="flex w-full flex-col">
            <div className="flex justify-between items-center">
              <p className="font-medium ml-2">My own house</p>
              <p className="mr-10">
                <span className="text-xs opacity-40">$54280/</span>
                <span className="text-lg font-medium">$122000</span>
              </p>
            </div>
            <div className=" pl-2 mt-2">
              <figure className="w-1/3 bg-black h-1 rounded-lg absolute"></figure>
              <figure className="w-68 bg-black opacity-30 h-1 rounded-lg relative"></figure>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 w-screen flex flex-col my-5">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold mb-2">Transactions</h3>
          <h3 className="opacity-40 font-semibold">
            -$430<span className="text-xs">.56</span>
          </h3>
        </div>
        <div className="mt-2 flex">
          <div className="w-16 h-14 bg-black rounded-xl flex justify-center items-center">
            <img src={User} alt="user icon" className="w-9" />
          </div>
          <div className="flex w-full flex-col">
            <div className="flex justify-between items-center">
              <p className="font-medium ml-2">Oleg D.</p>
              <p className="text-lg font-medium">
                $150<span className="text-xs">.00</span>
              </p>
            </div>
            <div className="flex justify-between items-center opacity-40">
              <p className="text-sm ml-2">Sending funds</p>
              <p className="text-xs font-medium">17:40</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
