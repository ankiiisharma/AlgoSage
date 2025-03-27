import { useState } from "react";
import gridbg from "../assets/grid.png";
import toast from "react-hot-toast";
import axios from "axios";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa";
import Loading from "./Loading";

interface ResponseData {
  timeComplexity: string;
  spaceComplexity: string;
}

const CodeInput = () => {
  const [code, setCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<string | ResponseData | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (code.trim() === "") {
      toast.error("Code cannot be empty");
      return;
    }

    setLoading(true);
    setResponse(null);
    setShowResult(false);

    try {
      const backendUrl =
        import.meta.env.VITE_BACKEND_URL ||
        "https://algo-sage-backend.vercel.app/api/analyse";

      const result = await axios.post(backendUrl, { code });
      const resultText: string = result.data.data || "An Error Occurred!";

      if (resultText === "Enter a Valid Code!") {
        toast.error("Please enter a valid code snippet");
        setResponse(resultText);
      } else {
        const complexityMatch = resultText.match(
          /Time Complexity:\s*(\S+)\s*Space Complexity:\s*(\S+)/i
        );

        if (complexityMatch) {
          setResponse({
            timeComplexity: complexityMatch[1] || "Not available",
            spaceComplexity: complexityMatch[2] || "Not available",
          });
          setShowResult(true);
        } else {
          toast.error("Unable to parse complexity");
          setResponse("Unexpected response format");
        }
      }
    } catch (error) {
      console.error("Analysis error:", error);
      toast.error("Failed to analyze code");
      setResponse("An error occurred during analysis");
    } finally {
      setLoading(false);
    }
  };

  return (
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
          placeholder="Paste your code here!"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button
          className="mt-4 px-4 py-3 w-3/4 font-bold bg-sky-500 text-white rounded-md flex flex-row items-center justify-center hover:bg-sky-800 hover:translate-y-1 duration-200"
          onClick={handleSubmit}
          disabled={loading}
        >
          <FaMagnifyingGlassChart className="mr-2" />
          {loading ? "Analyzing..." : "Analyse Code!"}
        </button>
      </div>

      {(loading || showResult) && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          {loading && !showResult ? (
            <Loading />
          ) : (
            <div className="relative w-1/2 h-[420px] flex flex-col items-center bg-white py-[200px] px-8 text-slate-600 tracking-tight rounded-lg shadow-lg hover:bg-sky-100 duration-200">
              <button
                className="absolute top-4 right-4 text-gray-600"
                onClick={() => setShowResult(false)}
              >
                <FaTimesCircle
                  className="hover:text-red-600 scale-200"
                  size={24}
                />
              </button>
              {typeof response === "string" ? (
                <p className="text-2xl font-semibold">{response}</p>
              ) : (
                <div className="text-center">
                  <p className="text-xl font-semibold">
                    Time Complexity:{" "}
                    <strong className="text-blue-700">
                      {response?.timeComplexity}
                    </strong>
                  </p>
                  <p className="text-xl font-semibold">
                    Space Complexity:{" "}
                    <strong className="text-blue-700">
                      {response?.spaceComplexity}
                    </strong>
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CodeInput;
