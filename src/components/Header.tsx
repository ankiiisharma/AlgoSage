// import React from "react";
import undeline from "../assets/underline.svg";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-[100%] flex flex-col px-[230px] justify-between items-center lg:flex-row">
        <div className="flex flex-col">
          <Link to={"/"}>
            <h1 className="text-3xl font-bold text-slate-200 hover:text-sky-300 duration-400 cursor-pointer mt-3">
              AlgoSage
            </h1>
          </Link>
          <img src={undeline} className="items-center" width={150} />
        </div>

        <Link to={`https://github.com/ankiiisharma/AlgoSage`}>
          <div className="flex justify-center items-center">
            <h1 className="flex flex-row items-center text-gray-200 text-[20px] bg-grad01-gradient px-7 py-2 rounded-md  font-normal tracking-tighter hover:text-white cursor-pointer mt-6 lg:mt-0">
              {<FaStar size={20} className="mr-2 hover:text-yellow-500" />}
              Github
            </h1>
          </div>
        </Link>
        <div className="absolute z-[-1] top-0 w-[45%] h-[45%] blue__gradient" />
      </div>
    </>
  );
};

export default Header;
