import React from "react";
// import Card from "./Card";
const Card = dynamic(() => import("./Card"));
import { useSelector } from "react-redux";
import { LineChart } from "./LineChart";
import dynamic from "next/dynamic";
import CardLoading from "./CardLoading";

const LeftArea = () => {
  const sales = useSelector((store) => store?.sale?.data.data);

  const totalSales =
    (sales &&
      sales.length > 0 &&
      sales.reduce((total, current) => total + current.quantity, 0)) ||
    0;

  const totalVolume =
    (sales &&
      sales.length > 0 &&
      sales.reduce(
        (total, current) => total + current.quantity * current.price,
        0
      )) ||
    0;

  return (
    <div className="lg:w-[70%] w-full p-4">
      <div className="flex xl:justify-between lg:justify-center justify-center gap-2 flex-wrap w-full mb-4">
        {totalSales ? (
          <Card test={"sales"} totalSales={totalSales} />
        ) : (
          <CardLoading />
        )}
        {totalVolume ? (
          <Card test={"volume"} totalVolume={totalVolume} />
        ) : (
          <CardLoading />
        )}
      </div>
      {totalSales ? (
        <LineChart />
      ) : (
        <div className="skeleton h-96 w-full"></div>
      )}
    </div>
  );
};

export default LeftArea;
