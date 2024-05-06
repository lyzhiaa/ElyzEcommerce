"use client";
import { Margarine } from "next/font/google";
import React from "react";
import Marquee from "react-fast-marquee";

export default function InfiniteCarouselComponent() {
  return (
    <main>
      <div className="flex justify-center items-center overflow-hidden rounded-3xl">
        <Marquee
          gradient
          // pauseOnHover={false} // Changed from true to false
          className="h-[100px]  overflow-hidden grid"
        >
          <div className="flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
            <img src="../image1.png" className="w-20  " alt="" />
          </div>

          <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
            <img src="../image2.png" className="w-40  " alt="" />
          </div>

          <div className="flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
            <img src="../image3.png" className="w-40 " alt="" />
          </div>

          <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
            <img src="../image5.png" className="w-40 " alt="" />
          </div>

          <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
            <img src="../image4.png" className="w-56 " alt="" />
          </div>

          <div className="overflow-hidden flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
            <img src="../image6.png" className="w-40 " alt="" />
          </div>

          <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
            <img src="../image7.png" className="w-40 " alt="" />
          </div>

          <div className="overflow-hidden flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
            <img src="../image8.png" className="w-40 " alt="" />
          </div>
        </Marquee>
      </div>
    </main>
  );
}
