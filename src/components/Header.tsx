import React from "react";
import undeline from "../assets/underline.svg";
import { FaGithub, FaStar } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="w-full flex flex-row px-[230px] justify-between">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold text-slate-200"> AlgoSage </h1>
          <img src={undeline} className="items-center" width={250} />
        </div>

        <div className="flex flex-row justify-center items-center">
          <h1 className="flex items-center text-gray-200 text-[20px] bg-grad01-gradient px-4 py-2 rounded-md  font-semibold tracking-tighter hover:text-white cursor-pointer">
            {" "}
            {<FaStar size={20} className=" mr-2" />}
            Star it on Github{" "}
          </h1>
        </div>
        <div className="absolute z-[-1] top-0 w-[45%] h-[45%] blue__gradient" />
      </div>
    </>
  );
};

export default Header;
