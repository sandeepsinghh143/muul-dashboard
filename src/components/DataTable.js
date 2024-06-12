import React from "react";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";

const columns = [
  {
    name: "Product",
    selector: (row) => row.product,
    sortable: true,
  },
  {
    name: "Quantity",
    selector: (row) => row.quantity,
    sortable: true,
  },
  {
    name: "Price",
    selector: (row) => row.price,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
  },
];

const MyDataTable = () => {
  const data = useSelector((store) => store.sale.data.data);
  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      selectableRows
      responsive
      highlightOnHover
      striped
      pointerOnHover
    />
  );
};

export default MyDataTable;
