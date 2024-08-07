// import React from "react";

const Loading = () => {
  return (
    <>
      <div className="flex  text-[35px] tracking-tighter font-semibold text-white justify-center items-center">
        <div className="w-5 h-5 rounded-full animate-pulse bg-slate-400"></div>
        <div className="w-5 h-5 m-2 rounded-full animate-pulse bg-slate-400"></div>
        <div className="w-5 h-5 rounded-full animate-pulse bg-slate-400"></div>
      </div>

      {/* <div className="absolute right-50 bottom-[45%] w-[50%] h-[50%] blue__gradient z-[-1]" /> */}
    </>
  );
};

export default Loading;
