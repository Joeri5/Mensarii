import React from "react";
import { Link } from "react-router-dom";
import { Cards, Logo } from "../assets";
import CardHome from "../assets/homecard.png";

const HomePage = () => {
  return (
    <div id="home" className="justify-between flex flex-col">
      <div className="py-10 px-10 md:px-0 flex justify-center md:w-screen md:h-full md:justify-end md:absolute">
        <img
          src={Cards}
          alt=""
          className="md:object-contain md:w-3/5 z-50 md:flex md:justify-start"
        />
      </div>
      <div className="md:relative md:w-1/2 md:h-screen md:mx-0 md:bg-java md:py-80 md:items-center">
        <div className="flex justify-center my-10">
          <div className="flex flex-col text-left text-white gap-3">
            <div className="flex items-center">
              <img src={Logo} alt="" className=" w-36" />
            </div>
            <h3 className="text-4xl font-medium">
              Banking
              <span className="text-java-500 md:text-black">
                {" "}
                from <br /> another{" "}
              </span>
              universe
            </h3>
            <p className="text-md text-white">
              It's time to get a new experience <br /> of interacting with the
              bank
            </p>
          </div>
        </div>
        <div className="flex px-10 justify-center mb-10 md:w-1/2">
          <Link
            to="/welcome"
            className="py-4 w-full text-center bg-white rounded-2xl"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
