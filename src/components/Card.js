import { Paper } from "@mui/material";
import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SwapVerticalCircleIcon from "@mui/icons-material/SwapVerticalCircle";

const Card = ({ test, totalSales, totalVolume }) => {
  return (
    <div className="xl:w-[45%] md:w-[70%] w-full card p-4 flex flex-col gap-8 text-2xl text-white bg-gradient-to-br from-amber-200 to-amber-400 rounded-lg">
      <div className="flex justify-between items-center">
        <div>
          {test == "sales" ? (
            <TrendingUpIcon fontSize="large" />
          ) : test == "volume" ? (
            <SwapVerticalCircleIcon fontSize="large" />
          ) : (
            ""
          )}
        </div>
        <div>
          {test == "sales"
            ? "Sales Count"
            : test == "volume"
            ? "Volume in Dollars"
            : ""}
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          {test == "sales"
            ? "Total Sales"
            : test == "volume"
            ? "Total Volume"
            : ""}
        </div>
        <div>
          {test == "sales"
            ? totalSales || 50
            : test == "volume"
            ? "$ " + (totalVolume || 500000)
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Card;
