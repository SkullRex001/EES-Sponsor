import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Samsung", "Tata", "Intel", "Tesla"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4 ">
      <div className="text-2xl md:text-4xl lg:text-5xl  mx-auto font-normal text-neutral-600 dark:text-neutral-400 ">
        <div className=" flex flex-col items-center gap-5">
          <div><b>OUR PAST SPONSORS</b> </div>
        
      
        <FlipWords words={words} /> <br />
        </div>
        
      </div>
    </div>
  );
}
