"use client";
import MyDataTable from "@/components/DataTable";
import LeftArea from "@/components/LeftArea";
import RightArea from "@/components/RightArea";
import { fetchSales } from "@/redux/salesSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.sale.isLoading);

  useEffect(() => {
    dispatch(fetchSales());
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full lg:w-[calc(100vw-270px)] lg:ml-[250px]">
      <div className="flex justify-between flex-wrap w-full mt-16 py-4">
        <LeftArea />
        <RightArea />
      </div>
      <div className="flex flex-col justify-center items-center">
        <MyDataTable />
      </div>
    </div>
  );
}
