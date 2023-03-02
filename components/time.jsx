import { useState, useEffect } from "react";
import React from "react";

export default function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const nextToDraw = new Date(
    time.getFullYear(),
    time.getMonth(),
    time.getDate(),
    time.getHours(),
    Math.floor((time.getMinutes() + 5) / 5) * 5,
    0,
    0
  );

  const timeDiff = Math.floor((nextToDraw - time) / 1000);
  const minutes = Math.floor(timeDiff / 60);
  const seconds = timeDiff % 60;
  const timeToDraw = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
    const nextToDrawtime = nextToDraw.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    const times = time.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit', second:'2-digit', hour12: true});

  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center h-full ">
        <p className="border-r-2 rounded-3xl h-full w-1/6 bg-black flex justify-around items-center">
          Current time: {times}
        </p>
        <p className="border-r-2 rounded-3xl h-full w-1/6 bg-black border-l-2 flex justify-around items-center">
          Time to draw: {timeToDraw}
        </p>
        <p className="border-l-2 rounded-3xl h-full w-1/6 bg-black flex justify-around items-center">
        Next draw at: {nextToDrawtime}
        </p>
      </div>
    </div>
  );
}
