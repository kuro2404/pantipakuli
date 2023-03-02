import { useState, useEffect } from "react";
import axios from "axios";

function Winnings() {
  const [drawTime, setDrawTime] = useState("");
  const [result, setResult] = useState("");

  // Calculate the current draw time with 5-minute intervals
  const now = new Date();
  const currentMinutes = now.getMinutes();
  const nearestMultipleOfFive = Math.floor(currentMinutes / 5) * 5;
  const currentDrawTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours(),
    nearestMultipleOfFive,
    0
  ).toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      axios
        .get(`/api/results?drawTime=${currentDrawTime}`)
        .then((res) => {
          const result = res.data.winningNumber;
          if (result !== undefined) {
            setResult(result);
            setDrawTime(currentDrawTime);
          }
        })
        .catch((err) => console.error(err));
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentDrawTime]);

  return (
    <div className="h-full">
      {result !== undefined && (
        <div className="w-full h-full object-cover ">
          <img
            className="h-full w-full"
            src={`/images/${result === 0 ? "0.png" : result + ".png"}`}
            alt={`Winning Image for ${result}`}
          />
          <p className="text-lg font-semibold text-center mt-4">
            Winning Number for {drawTime}
          </p>
        </div>
      )}
    </div>
  );
}

export default Winnings;
