import React from "react";
import { Link } from "react-router-dom";
import CardHome from "../assets/homecard.png";

const HomePage = () => {
  return (
    <div id="home" className="justify-between flex flex-col md:flex-row">
      <div className="flex justify-center md:justify-start">
        <img src={CardHome} alt="" className="w-3/4 sm:w-1/2" />
      </div>

      <div className="flex justify-center my-10">
        <div className="flex flex-col text-left text-white gap-3">
          <h3 className="text-4xl font-medium">
            Banking
            <span className="text-java-500">
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
      <div className="flex justify-center mb-10">
        <Link to="/signin" className="py-5 px-32 bg-white rounded-2xl">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
