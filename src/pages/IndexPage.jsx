import React from "react";
import { Link } from "react-router-dom";
import { Cards, Logo } from "../assets";

const IndexPage = () => {
  return (
    <div className="bg-black h-screen text-white overflow-hidden">
      <div className="flex justify-center">
        <img src={Logo} alt="logo" className="w-24 h-24" />
      </div>
      <div className="flex flex-col justify-center h-home">
        <div className="shadow-2xl shadow-white md:absolute">
          <img
            src={Cards}
            alt="Cards"
            className="md:object-contain md:w-1/2 md:flex md:justify-start"
          />
        </div>
        <div className="my-10 flex justify-center md:justify-end items-center md:my">
          <div className="md:relative md:w-1/2 md:flex md:flex-col md:items-center">
            <div>
              <h3 className="text-4xl md:text-5xl">
                Banking{" "}
                <span className="text-java">
                  from <br /> another
                </span>{" "}
                universe
              </h3>
              <p className="py-5 opacity-70 md:text-lg">
                It's time to get a new experience <br /> of interacting with the
                bank
              </p>
            </div>
            <button className="my-5 w-full md:w-6/12 py-4 px-5 bg-white bg-opacity-10 rounded-xl">
              <Link to="/welcome">Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
