import { useEffect, useState } from "react";
import loadingGif from "../assets/loading.gif";
import errorPicture from "../assets/error.jpg";
import backTracking from "../algorithms/back-tracking";
import backTrackingWithMRV from "../algorithms/back-tracking-with-MRV";
import bruteForce from "../algorithms/brute-force";

function Solver({
  setIsSolving,
  setIsSolved,
  boradData,
  setBoradData,
  algorithm,
}) {
  const [processing, setIsProccessing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (algorithm === "backTracking") {
        var startTime = performance.now()
        let answer = backTracking(boradData);
        var endTime = performance.now()
        console.log('TIME TAKEN:', endTime - startTime);
        if (answer === false) setIsProccessing(false);
        else {
          setIsSolved(true);
          setBoradData(answer);
          setIsSolving(false);
        }
      } else if (algorithm === "backTrackingWithMRV") {
        let answer = backTrackingWithMRV(boradData);
        if (answer === false) setIsProccessing(false);
        else {
          setIsSolved(true);
          setBoradData(answer);
          setIsSolving(false);
        }
      } else if (algorithm === "bruteForce") {
        let answer = bruteForce(boradData);
        if (answer === false) setIsProccessing(false);
        else {
          setIsSolved(true);
          setBoradData(answer);
          setIsSolving(false);
        }
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [
    algorithm,
    boradData,
    setBoradData,
    setIsProccessing,
    setIsSolving,
    setIsSolved,
  ]);

  return (
    <div>
      {processing ? (
        <div className={"text-center p-5 w-max mx-auto"}>
          <img src={loadingGif} alt="loading..." />
        </div>
      ) : (
        <div className={"text-center p-5 mt-10 w-max mx-auto"}>
          <img
            src={errorPicture}
            alt="Error"
            className="bg-blue-400 w-max mx-auto"
          />
          <div className={"text-4xl text-gray-700 mt-10"}>
            Źle rozwiązana plansza
          </div>
          <button
            onClick={(e) => {
              setIsSolving(false);
            }}
            className="bg-red-600 mt-5 text-white px-3 py-2 rounded-lg cursor-pointer hover:bg-red-900 transition shadow-lg"
          >
            Powrót
          </button>
        </div>
      )}
    </div>
  );
}

export default Solver;
