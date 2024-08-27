// import { useState } from "react";
import Header from "./components/Header";
import CodeInput from "./components/CodeInput";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="min-h-screen w-full overflow-hidden text-white flex items-center justify-center flex-col">
        <Header />
        <CodeInput />
        {/* <Footer /> */}
      </div>
      <Analytics />
      <Toaster position="top-center" />
    </>
  );
};

export default App;
