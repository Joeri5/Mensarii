import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Spinner from "../components/Spinner";
import UserNavbar from "../components/UserNavbar";
import CreditCard from "../components/CreditCard";

import { SearchIcon } from "../assets";

const PaymentsPage = () => {
  const history = useHistory();
  const [user, loading] = useAuthState(auth);
  const date = new Date(Date.now());

  useEffect(() => {
    if (!user) {
      history.push("/");

      return;
    }
  }, [user, history]);

  if (!user || loading) return <Spinner />;

  return (
    <div className="bg-white h-screen w-full overflow-hidden">
      {/* <UserNavbar /> */}
      <div className="px-5 py-5 flex items-center justify-between">
        <div className="flex flex-col gap-0">
          <p className="opacity-60 font-medium text-lg">
            {date.getDate()} {date.toLocaleString("en-US", { month: "long" })}
          </p>
          <h3 className="text-2xl font-semibold ">Hey, {user.displayName}!</h3>
        </div>
        <div className="w-10 h-10 flex items-center justify-center rounded-lg shadow drop-shadow-4xl">
          <img src={SearchIcon} alt="" className="w-7 h-7" />
        </div>
      </div>
      <p className="px-5 pr-5 pt-5 text-xl font-medium">Choose Card</p>
      <div className="px-5 py-2 flex overflow-x-scroll gap-10 justify-between w-full">
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
      <p className="px-5 pr-5 pt-5 text-xl font-medium">Choose Recipient</p>
    </div>
  );
};

export default PaymentsPage;
