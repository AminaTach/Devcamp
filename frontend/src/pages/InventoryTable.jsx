import React, { useState } from "react";
import down from "../assets/down.svg"
const InventoryTable = () => {
  const [data, setData] = useState([
    {
      productName: "Argan Face Serum",
      sku: "COS-001",
      operationType: "Entry",
      quantity: 120,
      operationDate: "2023-03-01",
      responsible: "1000 units",
      comments: "Comment 1",
    },
  ]);

  return (
    <div className="container h-[95%] p-4 bg-white rounded-2xl my-4 mr-2 z-10">
      <h1 className="text-2xl font-bold  text-h1 mb-4">Inventory Tracking</h1>
      <p className="mb-4 text-h2">Real-time overview of your cosmetic stock levels, expiration risks, and restock priorities.</p>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search"
          className="border rounded-3xl border-slate-200 p-2 w-1/3"
        />
       <button className="rounded-2xl text-xs px-4 py-2 flex flex-row gap-2  text-white bg-blue">
        <img src={down} className="w-4 h-4"/>
        Upload report

       </button>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Product Name</th>
            <th className="border p-2">SKU</th>
            <th className="border p-2">Operation Type</th>
            <th className="border p-2">Quantity</th>
            <th className="border p-2">Operation Date</th>
            <th className="border p-2">Responsible</th>
            <th className="border p-2">Comments</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border p-2">{item.productName}</td>
              <td className="border p-2">{item.sku}</td>
              <td className="border p-2">{item.operationType}</td>
              <td className="border p-2">{item.quantity}</td>
              <td className="border p-2">{item.operationDate}</td>
              <td className="border p-2">{item.responsible}</td>
              <td className="border p-2">{item.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
