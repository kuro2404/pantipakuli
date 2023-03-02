import Head from "next/head";
import { useState, useEffect } from "react";
import Time from "../components/time";
import Winnings from "../components/winning";
import Reveal from "../components/reveal";
import Images from "../components/images";
import ResultsTable from "../components/ResultsTable";
import Amount from "../components/amount"

export default function MyPage() {
  const [time, setTime] = useState(new Date());
  const [play1Gif, setPlay1Gif] = useState(false);
  const [play2Gif, setPlay2Gif] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const nextToDraw = new Date(
      time.getFullYear(),
      time.getMonth(),
      time.getDate(),
      time.getHours(),
      Math.floor(time.getMinutes() / 5) * 5 + 5,
      0,
      0
    );
    const nextToDrawTimestamp = nextToDraw.getTime();
    const timeTimestamp = time.getTime();
    const timeToDraw = Math.floor((nextToDrawTimestamp - timeTimestamp) / 1000);
    console.log(timeToDraw);
  
    if (timeToDraw === 0) {
      window.location.reload();
    }
  }, [time]);
  

  return (
    <div className="">
      <Head>
        <title>Panti Pakuli</title>
      </Head>
      <video
        className="h-screen w-screen object-cover absolute"
        muted
        loop
        autoPlay
        src="/background.mp4"
      />
      <div className="bg-black opacity-80 h-screen w-screen absolute"></div>
      <div className="text-white h-screen w-screen absolute">
        <section className="h-[50%] border-2 rounded-2xl">
          <div className="border-b-2 h-[20%]">
            <Time />
          </div>
          <div className="flex justify-center items-start w-full h-[80%]">
            <div className="w-1/3 h-full border-2">
              <ResultsTable />
              <div className="h-auto flex justify-around">
                <div className="px-2 py-1 border-2">Latest</div>
                <div className="px-2 py-1 border-2">Old</div>
              </div>
            </div>
            <div className="w-1/3 h-full ">
              <Winnings />
              <div className="h-full w-full rounded-3xl ">
                <Reveal />
              </div>
            </div>
            <div className="w-1/3 h-full rounded-3xl bg-black flex border-2 justify-center items-center">
              <img className="w-full h-full rounded-3xl p-2" src="/meow.jpeg" alt="Cute cat" />
            </div>
          </div>
        </section>
        <section className="h-[40%] border-2 rounded-xl">
          <Images />
        </section>
        <section className="flex justify-center border-2 h-[10%] rounded-2xl">
          <div className="flex items-center h-full w-1/2">
            <Amount/>
          </div>
        </section>
      </div>
    </div>
  );
}
