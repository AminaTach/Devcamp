import React, { useState } from "react";
import SuccessPopup from "./succes";


const AddPack = ({ isOpen, onClose }) => {
    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [stockLevel, setStockLevel] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [price, setPrice] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            productName,
            category,
            stockLevel,
            expirationDate,
            price,
            ingredients,
        });
        setShowSuccessPopup(true);
    };

    
  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
    onClose();
  };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white  rounded-lg p-6 w-[70%]">
                <h2 className="text-2xl  text-h1 font-bold mb-4">Add New Pack</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
                    <div className="mb-4">
                        <label className="block text-[#111827] font-normal text-sm mb-2">
                            Pack Name
                        </label>
                        <input
                            type="text"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            className="w-full text-text border-slate-200 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-[#111827] font-normal text-sm  mb-2">
                           Type
                        </label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full  border-slate-200 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="Skincare">Skincare</option>
                            <option value="Haircare">Haircare</option>
                            {/* Ajoutez d'autres catégories ici */}
                        </select>
                    </div>
                   
                    <div className="mb-4">
                        <label className="block text-[#111827] font-normal text-sm  mb-2">
                            Expiration Date
                        </label>
                        <input
                            type="date"
                            value={expirationDate}
                            onChange={(e) => setExpirationDate(e.target.value)}
                            className="w-full border border-slate-200 px-3 py-2 text-text  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-[#111827] font-normal text-sm  mb-2">
                            Price
                        </label>
                        <input
                            type = "number"
                            value={ingredients}
                            onChange={(e) => setIngredients(e.target.value)}
                            className="w-full border border-slate-200 px-3 py-2 text-text t  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                  
                    <div className="mb-4">
                        <label className="block text-[#111827] font-normal text-sm  mb-2">
                            Products
                        </label>
                        <textarea
                            value={ingredients}
                            onChange={(e) => setIngredients(e.target.value)}
                            className="w-full border border-slate-200 px-3 py-2 text-text t  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="col-span-3 flex justify-end gap-2">
                    <button
                            type="submit"
                            
                            className="bg-blue text-white px-4 py-2 rounded-full font-normal flex items-center"
                        >
                            Save Pack
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-blue_bg text-text px-4 py-2 rounded-full  font-normal flex items-center"                        >
                            Cancel
                        </button>

                    </div>
                </form>
            </div>
            {showSuccessPopup && <SuccessPopup onClose={closeSuccessPopup} />}
        </div>
    );
};

export default AddPack;
