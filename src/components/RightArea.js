import React from "react";
import { useSelector } from "react-redux";
import PieChart from "./PieChart";
import { Button } from "@mui/material";
import Link from "next/link";

const RightArea = () => {
  const data = useSelector((store) => store.sale.data.data);
  const pending = data ? data.filter((item) => item.status === "Pending") : [];
  const completed = data
    ? data.filter((item) => item.status === "Completed")
    : [];
  const cancelled = data
    ? data.filter((item) => item.status === "Cancelled")
    : [];

  const chartData = {
    labels: ["Pending", "Completed", "Cancelled"],
    datasets: [
      {
        label: "status percentage",
        data: [
          pending.length && pending.length,
          completed.length && completed.length,
          cancelled.length && cancelled.length,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="lg:w-[30%] w-full p-4 flex flex-col justify-between">
      {pending.length ? (
        <PieChart data={chartData} />
      ) : (
        <div className="skeleton w-full h-[57vh]"></div>
      )}
      {pending.length ? (
        <Button variant="contained" sx={{ marginTop: "50px" }}>
          <Link href={"https://muul-backend.vercel.app/api-docs/"}>
            API dOCS
          </Link>
        </Button>
      ) : (
        <div className="skeleton h-10 w-full"></div>
      )}
    </div>
  );
};

export default RightArea;
