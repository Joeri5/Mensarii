import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import CreditCard from "../components/CreditCard";
import faker from "@faker-js/faker";

import { ArrowBack, Logout, Money, User } from "../assets";
import { one, two, three, four, five, six } from "../assets/profilePictures";
import UserProfile from "../components/UserProfile";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const PaymentsPage = () => {
  const history = useHistory();
  const { user } = useAuth();
  const date = new Date(Date.now());

  useEffect(() => {
    if (!user) {
      history.push("/");

      return;
    }
  }, [user, history]);

  return (
    <div className="bg-gray-100 h-full w-full overflow-x-hidden">
      <div className="mx-5 my-5 flex justify-between">
        <button
          onClick={history.goBack}
          className="bg-white px-3 py-2 rounded-xl shadow-sm"
        >
          <img src={ArrowBack} alt="" className="w-7 h-7" />
        </button>
        <div className="flex items-center justify-between bg-white w-4/6 px-5 rounded-xl shadow-sm">
          <p className="font-semibold">{user.displayName}</p>
          <p className="opacity-60 text-sm">
            {date.getDate()} {date.toLocaleString("en-US", { month: "long" })}
          </p>
        </div>
        <button
          onClick={() => {
            signOut(auth);
            history.push("/");
          }}
          className="bg-white px-3 py-2 rounded-xl shadow-sm"
        >
          <img src={Logout} alt="" className="w-7 h-7" />
        </button>
      </div>
      <p className="mx-5 mr-5 text-xl font-semibold">Choose Card</p>
      <div className="mx-5 my-4 flex overflow-x-scroll gap-10 justify-between w-full">
        <CreditCard
          cardNumber={"0134"}
          balance={"5,309"}
          background={"bg-java-500"}
        />
        <CreditCard
          cardNumber={"0123"}
          balance={"3,390"}
          background={"bg-viking-500"}
        />
        <CreditCard
          cardNumber={"2890"}
          balance={"3,056"}
          background={"bg-java-500"}
        />
        <CreditCard
          cardNumber={"4790"}
          balance={"1,209"}
          background={"bg-viking-500"}
        />
      </div>
      <p className="px-5 pr-5 pt-5 text-xl font-semibold">Choose Recipient</p>
      <div className="mx-5 my-5 flex flex-col gap-5 items-center md:flex-row md:gap-10">
        <div className="w-full md:w-1/2">
          <label class="relative block">
            <img
              class="pointer-events-none w-7 h-7 absolute top-1/2 transform -translate-y-1/2 left-5"
              src={User}
            />
            <input
              type="text"
              placeholder="Card or Phone Number..."
              class="shadow-sm w-full rounded-lg py-4 block pl-14 focus:outline-none"
            />
          </label>
        </div>
        <div class="overflow-x-scroll flex gap-10 justify-between w-full md:w-1/2">
          <UserProfile
            profilePicture={one}
            userName={faker.name.firstName("male")}
          />
          <UserProfile
            profilePicture={two}
            userName={faker.name.firstName("male")}
          />
          <UserProfile
            profilePicture={three}
            userName={faker.name.firstName("female")}
          />
          <UserProfile
            profilePicture={four}
            userName={faker.name.firstName("male")}
          />
          <UserProfile
            profilePicture={five}
            userName={faker.name.firstName("male")}
          />
          <UserProfile
            profilePicture={six}
            userName={faker.name.firstName("male")}
          />
        </div>
      </div>
      <p className="mx-5 mt-7 text-xl font-semibold">Enter Amount</p>
      <div className="mx-5">
        <div className="w-full md:w-1/2 mt-5 mb-10">
          <label class="relative block">
            <img
              class="pointer-events-none w-7 h-7 absolute top-1/2 transform -translate-y-1/2 left-5"
              src={Money}
            />
            <input
              type="number"
              placeholder="From $0.01 to $100,000..."
              class="shadow-sm w-full rounded-lg py-4 block pl-14 focus:outline-none"
            />
          </label>
        </div>
        <div className="pb-5">
          <button className="bg-mine-shaft-500 w-full py-4 text-white rounded-xl">
            Transfer Money
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;
