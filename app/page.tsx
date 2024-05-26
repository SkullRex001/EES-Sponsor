
import { ThreeDCardDemo } from "@/components/3D-Card";
import { MovingBorderDemo } from "@/components/Download-Brouchure";
import { FlipWordsDemo } from "@/components/Flip-Words";
import { DirectionAwareHoverDemo } from "@/components/Gallery";
import { HeroHighlightDemo } from "@/components/Hero";
import { HeroScrollDemo } from "@/components/Scroll-Animation";
import { TextGenerateEffectDemo } from "@/components/Support-Us";
import { TracingBeamDemo } from "@/components/WHY_SPONCER2";
import { InfiniteMovingCardsDemo } from "@/components/Why-Sponcer-Us";
import Background from "@/components/background";



import React from "react";

export default function Home() {
  return (
    <>
      <div>

        <div className=" mt-[-200px] flex flex-col gap-[8vw] ">
          <HeroHighlightDemo />
          <FlipWordsDemo />

        </div>
        <div className=" flex flex-wrap mt-[-30vh] gap-10 items-center justify-center">
          <ThreeDCardDemo img="https://images.unsplash.com/photo-1650951478368-ecc858d151e8?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="TATA" description="Tata group are our trusted partners from the start" />
          <ThreeDCardDemo img="https://images.unsplash.com/photo-1661347998423-b15d37d6f61e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="SAMSUNG" description="Samsung is our trusted partners from the start" />
          <ThreeDCardDemo img="https://images.unsplash.com/photo-1612810806695-30f7a8258391?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="TESLA" description="TESLA is our trusted partners from the start" />
          <ThreeDCardDemo img="https://images.unsplash.com/photo-1649006708938-cf885c646df6?q=80&w=2661&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="INTEL" description="INTEL is our trusted partners from the start" />
        </div>

        <div className=" flex items-center justify-center flex-col gap-20">

          <p className="text-2xl md:text-4xl lg:text-5xl  mx-auto font-semibold text-black "> SUPPORT US</p>
          <div className=" w-[80vw] relative z-40">
            <TextGenerateEffectDemo />
          </div>
          <MovingBorderDemo />
          <p className="text-2xl md:text-4xl lg:text-5xl  mx-auto font-semibold text-black "> Why Should You Sponsor Us ?</p>
          <div className=" relative">
            <TracingBeamDemo />
          </div>

          <p className="text-xl md:text-3xl lg:text-4xl  mx-auto font-semibold text-black z-50 "> BANK DETAILS</p>
          <p className=" text-gray-700 z-50 text-center mb-11">Account Name - Electrical enginnering Society, NIT JAMSHEDPUR <br />

            Account number - 293928329738 <br />

            IFSC Code - SBIN0001882 <br />

            Phone/Google Pay/Paytm - 1234567890</p>

        </div>

      </div>



    </>


  );
}
