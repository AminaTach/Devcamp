import React, { useState } from "react";
import down from "../assets/down.svg";
import doc from "../assets/document.svg";
import ed from '../assets/edit-2.svg'
import trach from '../assets/trash-01.svg'
import ex from '../assets/export.svg'

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
    {
      productName: "Argan Face Serum",
      sku: "COS-001",
      operationType: "Entry",
      quantity: 120,
      operationDate: "2023-03-01",
      responsible: "1000 units",
      comments: "Comment 1",
    },
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

  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (index) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(index)) {
        return prevSelectedItems.filter((item) => item !== index);
      } else {
        return [...prevSelectedItems, index];
      }
    });
  };

  const areButtonsVisible = selectedItems.length === 0;

  return (
    <div className="container h-[95%] w-full min-w-[100vh] flex flex-col p-4 bg-white rounded-2xl my-4 mr-2 z-10">
      <h1 className="text-2xl font-bold text-h1 mb-4">Inventory Tracking</h1>
      <p className="mb-4 text-h2">
        Real-time overview of your cosmetic stock levels, expiration risks, and restock priorities.
      </p>
      <div className="flex justify-between items-center w-full mb-4">
        <input
          type="text"
          placeholder="Search"
          className="border-b rounded-3xl w-1/3 border-slate-200 text-slate-300 focus:text-text text-sm py-2 px-4"
        />
        <div className="flex flex-row gap-2">
          {areButtonsVisible ? (

            <button className="rounded-full font-thin text-xs px-4 py-3 flex flex-row gap-2 text-gray-400 bg-blue_bg">
              <img src={doc} className="w-4 h-4 cursor-pointer" alt="Document" />
              All reports
            </button>


          ) : (
            <>
              <div className="flex flex-row gap-2 mx-2 justify-center items-center text-h1 text-sm ">
                <img src={ex} className="w-4 h-4 cursor-pointer text-h1" />
                <p className="text-h2 text-xs font-thin">Export </p>
                <img src={ed} className="w-4 h-4 cursor-pointer text-h1" />
                <p className="text-h2 text-xs font-thin">Edit </p>
                <img src={trach} className="w-4 h-4 cursor-pointer text-h1" />
                <p className="text-h2 text-xs font-thin">Delete </p>

              </div>


            </>)}
          <button className="rounded-3xl text-xs px-4 py-3 flex flex-row gap-2 text-white bg-blue">
            <img src={down} className="w-4 h-4 cursor-pointer" alt="Download" />
            Upload report
          </button>
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-sm text-h2 font-thin">
            <th className="border-b border-slate-200 ">
              <input type="checkbox" className=" rounded-md border-[1px] border-h2" onChange={() => handleCheckboxChange(-1)} />
            </th>
            <th className="border-b border-slate-200 p-2">Product Name</th>
            <th className="border-b border-slate-200 p-2">SKU</th>
            <th className="border-b border-slate-200 p-2">Operation Type</th>
            <th className="border-b border-slate-200 p-2">Quantity</th>
            <th className="border-b border-slate-200 p-2">Operation Date</th>
            <th className="border-b border-slate-200 p-2">Responsible</th>
            <th className="border-b border-slate-200 p-2">Comments</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100 text-text text-sm">
              <td className="border-b border-slate-200 p-2">
                <input
                  type="checkbox"
                  className="rounded-md border-[1px] border-h2"
                  onChange={() => handleCheckboxChange(index)}
                  checked={selectedItems.includes(index)}
                />
              </td>
              <td className="border-b text-[#1B3179] border-slate-200 p-2">
                {item.productName}
              </td>
              <td className="border-b border-slate-200 p-2">{item.sku}</td>
              <td className="border-b border-slate-200 p-2">{item.operationType}</td>
              <td className="border-b border-slate-200 p-2">{item.quantity}</td>
              <td className="border-b border-slate-200 p-2">{item.operationDate}</td>
              <td className="border-b border-slate-200 p-2">{item.responsible}</td>
              <td className="border-b border-slate-200 p-2">{item.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
