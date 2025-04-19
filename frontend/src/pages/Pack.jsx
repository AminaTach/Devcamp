import React, { useState } from "react";
import AddProductModal from "../components/addpack";
import eye from '../assets/eye.svg';
import ed from '../assets/edit-2.svg';
import trach from '../assets/trash.svg';
import { Crown } from "iconsax-reactjs";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Packs = () => {
    const navigate = useNavigate();

  const [data, setData] = useState([
    {
      productName: "Argan Face Serum",
      sku: "COS-001",
      category: "Skincare",
      stockLevel: "1000 units",
      price: 1200,
      expDate: "2023-03-01",
      status: "Stale",
    },
    {
      productName: "Vitamin C Gel",
      sku: "COS-002",
      category: "Skincare",
      stockLevel: "70 units",
      price: 1200,
      expDate: "2023-03-01",
      status: "Expiring soon",
    },
    {
      productName: "Anti-Aging Pack",
      sku: "PACK-003",
      category: "Haircare",
      stockLevel: "15 units",
      price: 1200,
      expDate: "2023-03-01",
      status: "Expired soon",
    },
    // Ajoutez d'autres données ici
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

 

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container h-[95%] w-full p-4 bg-white rounded-2xl my-4 mr-2 z-10">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold text-blue mb-4">Packs</h1>
          <p className="mb-4 text-[#6B7280]">
            Real-time overview of your cosmetic stock levels,
             expiration risks, and restock priorities.
          </p>
        </div>
        <button
          onClick={openModal}
          className="bg-blue text-white px-4 py-2 rounded-full flex items-center"
        >
          + Add new pack
        </button>
        <button
             onClick={() => navigate("/plans")} 

          className="bg-[#FFB31F] text-white px-4 py-2 rounded-full flex items-center"
        >
            <Crown className=" size-4 text-white"/>
         Generate Packs
        </button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
          className="border-b rounded-3xl w-1/3 border-slate-200 text-slate-300 focus:text-[#1B3179] text-sm py-2 px-4"
        />
        <div>
          <input
            type="date"
            placeholder="Expiration Date"
            className="border-b rounded-3xl border-slate-200 text-slate-300 focus:text-[#1B3179] text-sm py-2 px-4"
          />
          <select className="border rounded-3xl font-thin px-4 py-2 ml-4 text-text focus:ring-[0.5px] focus:ring-blue_bg">
            <option className="text-text" >   All Categories</option>
            <option className="text-text" >Skincare</option>
            <option className="text-text" >Haircare</option>
          </select>
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-sm text-[#6B7280] font-thin">
            <th className="border-b border-slate-200 p-2">Pack Name</th>
            <th className="border-b border-slate-200 p-2">SKU</th>
            <th className="border-b border-slate-200 p-2">Products</th>
            <th className="border-b border-slate-200 p-2">Price (USD)</th>
          
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100 text-sm text-[#1B3179]">
              <td className="border-b border-slate-200 p-2">{item.productName}</td>
              <td className="border-b border-slate-200 p-2">{item.sku}</td>
              <td className="border-b border-slate-200 p-2">{item.price}</td>
              <td className={`border-b border-slate-200 text-center p-2  `}>
                {item.status}
              </td>
            
            </tr>
          ))}
        </tbody>
      </table>
      <AddProductModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Packs;
