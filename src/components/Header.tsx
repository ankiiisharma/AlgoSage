// import React from "react";
import undeline from "../assets/underline.svg";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-[100%] flex flex-col px-[230px] justify-center items-center lg:flex-row">
        <div className="flex flex-col">
          <Link to={"/"}>
            <h1 className="text-4xl font-bold text-slate-200 hover:text-sky-300 duration-400 cursor-pointer mt-3">
              AlgoSage
            </h1>
          </Link>
          <img src={undeline} className="items-center" width={170} />
        </div>

        <div className="absolute z-[-1] top-0 w-[45%] h-[45%] blue__gradient" />
      </div>
    </>
  );
};

export default Header;
