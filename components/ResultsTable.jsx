import { useState, useEffect } from "react";

function ResultsTable() {
  const [drawTimes, setDrawTimes] = useState([]);
  const [results, setResults] = useState([]);

  // Calculate the 10 previous draw times with 5-minute intervals
  const now = new Date();
  const currentMinutes = now.getMinutes();
  const nearestMultipleOfFive = Math.floor(currentMinutes / 5) * 5;
  const startDrawTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours(),
    nearestMultipleOfFive,
    0
  );
  const drawTimesArray = Array(5)
    .fill()
    .map((_, index) => {
      const drawTime = new Date(
        startDrawTime.getTime() - index * 5 * 60 * 1000
      );
      return drawTime.toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    });

  useEffect(() => {
    const intervalId = setInterval(() => {
      Promise.all(
        drawTimesArray.map((drawTime) =>
          fetch(`/api/results?drawTime=${drawTime}`).then((res) => res.json())
        )
      ).then((results) => {
        setResults(results.map((result) => result.winningNumber));
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const getRowClassName = (winningNumber) => {
    // if (winningNumber === 1 || winningNumber === 5 || winningNumber === 9) {
    //   return "";
    // }
  };

  return (
    <div className="flex first-letter">
      {drawTimesArray.map((drawTime, index) => (
        <div key={drawTime} className="">
          <div className="border-2">
            {results[index] !== undefined && ( // Make sure the value is defined before rendering
              <img
                src={`/images/${
                  results[index] === 0 ? "0.png" : results[index] + ".png"
                }`}
                className="w-[100%] h-full rounded-xl p-2"
                alt={`Winning Image for ${results[index]}`}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ResultsTable;
