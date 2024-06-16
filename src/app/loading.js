import CardLoading from "@/components/CardLoading";
import React from "react";

export default function Loading() {
  return (
    <div className="w-full lg:w-[calc(100vw-270px)] lg:ml-[250px]">
      <div className="flex justify-between flex-wrap w-full mt-16 py-4">
        <div className="lg:w-[70%] w-full p-4">
          <div className="flex xl:justify-between lg:justify-center justify-center gap-2 flex-wrap w-full mb-4">
            <CardLoading />
            <CardLoading />
          </div>
          <div className="skeleton h-96 w-full"></div>
        </div>
        {/* //TODO: ----------------------- */}
        <div className="lg:w-[30%] w-full p-4 flex flex-col justify-between">
          <div className="skeleton w-full h-[57vh]"></div>
          <div className="bg-[#CCD3CA] w-full h-10 rounded-md"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-80 bg-slate-200"></div>
    </div>
  );
}
