// import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex flex-row justify-between rounded-md px-[230px] py-3 mt-5">
        <Link to={`https://github.com/ankiiisharma/AlgoSage`}>
          <div className="flex justify-center items-center">
            <h1 className="flex flex-row items-center text-gray-200 text-[20px] bg-grad01-gradient px-7 py-2 rounded-md  font-normal tracking-tighter hover:text-white cursor-pointer mt-6 lg:mt-0">
              {<FaStar size={20} className="mr-2 hover:text-yellow-500" />}
              Github
            </h1>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Footer;
