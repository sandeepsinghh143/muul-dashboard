import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { LineChart } from "./LineChart";
import CardLoading from "./CardLoading";
import ChartLoading from "./ChartLoading,";

const LeftArea = () => {
  const sales = useSelector((store) => store?.sale?.data.data);
  const loading = useSelector((store) => store.sale.isLoading);

  const totalSales =
    sales &&
    sales.length > 0 &&
    sales.reduce((total, current) => total + current.quantity, 0);

  const totalVolume =
    sales &&
    sales.length > 0 &&
    sales.reduce(
      (total, current) => total + current.quantity * current.price,
      0
    );

  if (loading) {
    return <div>Loading.....</div>;
  }

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
      {sales ? <LineChart /> : <ChartLoading />}
    </div>
  );
};

export default LeftArea;
