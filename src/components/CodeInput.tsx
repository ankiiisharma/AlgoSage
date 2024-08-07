import React, { useState } from "react";
import gridbg from "../assets/grid.png";
import toast from "react-hot-toast";
import axios from "axios";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa";
import Loading from "./Loading";

const CodeInput = () => {
  const [code, setCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<string | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (code.trim() === "") {
      toast.error("Code cannot be empty");
      console.error("Code cannot be empty");
      return;
    }

    // console.log(process.env.REACT_APP_MAINAPI);

    setLoading(true);
    setResponse(null);
    setShowResult(false);

    try {
      const result = await axios.post(import.meta.env.VITE_MAINAPI, { code });

      console.log(result);

      const resultText =
        result.data.data.candidates[0]?.content?.parts[0]?.text;
      setResponse(resultText || "An Error Occurred!");
      console.log(resultText);

      const [timeComplexity, spaceComplexity] = resultText
        .split("\n")
        .map((line) => line.trim().replace(/^.*:\s*/, ""));

      setResponse({
        timeComplexity: timeComplexity || "Not available",
        spaceComplexity: spaceComplexity || "Not available",
      });

      if (resultText === "Enter a Valid Code!") {
        toast.error("Enter a Valid Code!");
      } else {
        setShowResult(true);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setResponse("An Error Occurred while analyzing the code.");
      toast.error("An Error Occurred while analyzing the code.");
    } finally {
      setLoading(false);
    }
    console.log("here is the code!", code);
  };

  return (
    <>
      <div className="relative w-full h-full mt-7">
        <img
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
          src={gridbg}
          alt="bg-grid"
        />

        <div className="flex flex-col items-center z-10 p-2">
          <textarea
            id="codeare"
            className="w-3/4 h-[420px] p-2 bg-grad02-gradient border border-slate-300 rounded-lg tracking-tight"
            placeholder={"Paste your code here!"}
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button
            className="mt-4 px-4 py-3 w-3/4 font-bold bg-sky-500 text-white rounded-md flex flex-row items-center justify-center"
            onClick={handleSubmit}
          >
            <FaMagnifyingGlassChart className="mr-2" /> Analyse Code!
          </button>
        </div>

        {(loading || showResult) && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
            {loading && !showResult && (
              <div className="flex flex-col items-center">
                <Loading />
              </div>
            )}
            {showResult && (
              <div className="relative flex flex-col items-center bg-white py-[200px] px-8 text-slate-600 tracking-tight rounded-lg shadow-lg hover:bg-sky-100 duration-200 ">
                <button
                  className="absolute top-4 right-4 text-gray-600"
                  onClick={() => setShowResult(false)}
                >
                  <FaTimesCircle
                    className="hover:text-red-600 scale-200"
                    size={24}
                  />
                </button>
                <p className="text-2xl font-semibold">
                  {" "}
                  <p>
                    Time Complexity:
                    <strong className="text-blue-700">
                      {response.timeComplexity}{" "}
                    </strong>
                  </p>
                  <p>
                    Space Complexity:{" "}
                    <strong className="text-blue-700">
                      {" "}
                      {response.spaceComplexity}
                    </strong>
                  </p>
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default CodeInput;