// import React from "react";
import Header from "./components/Header";
import CodeInput from "./components/CodeInput";
import { Toaster } from "react-hot-toast";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="min-h-screen text-white flex items-center justify-center flex-col">
        <Header />
        <CodeInput />
        {/* <Footer /> */}
      </div>
      <Toaster position="top-center" />
    </>
  );
};

export default App;
