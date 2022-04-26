import React from "react";
import { Dot, VisaIcon } from "../assets";

const CreditCard = ({ cardNumber, balance, background }) => {
  return (
    <div className={`rounded-xl ${background}`}>
      <div className="px-5 py-5 flex items-center justify-between w-creditcard md:w-96">
        <img src={VisaIcon} alt="" className="w-14 h-14" />
        <div className="flex items-center gap-2">
          <figure className="bg-black h-1.5 w-1.5 rounded-full"></figure>
          <figure className="bg-black h-1.5 w-1.5 rounded-full"></figure>
          <figure className="bg-black h-1.5 w-1.5 rounded-full"></figure>
          <figure className="bg-black h-1.5 w-1.5 rounded-full"></figure>
          <p className="text-xl">{cardNumber}</p>
        </div>
      </div>
      <p className="px-5 py-5 text-5xl font-medium">${balance}</p>
    </div>
  );
};

export default CreditCard;
