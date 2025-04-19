import React from "react";
import { AlertTriangle } from "lucide-react";

const ProductLimitPopup = ({ onClose, onUpgrade }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white rounded-3xl p-8 shadow-lg w-[25vw]">
                <div className="flex flex-col items-center  justify-center mb-4">
                  <div className="py-2 px-4 bg-[#FEE2E2] rounded-full flex items-baseline justify-center"> <AlertTriangle className="w-12 h-12  text-red-500 mb-4" /></div> 
                    <h2 className="text-xl font-bold text-center text-black mb-4">Oops, You've hit the Limit!</h2>
                    <p className="text-4xl font-bold text-center text-[#DC2626] mb-4">50 Products</p>
                </div>


                <div>
                <p className="ml-5 mt-6 text-sm text-[#4B5563] text-left mb-6">
                    The free version lets you manage up to 10 products. You've uploaded 20.
                </p>
                <p className="ml-5 text-sm text-[#4B5563] text-left mb-6">
                    Unlock full access and manage unlimited products by switching to the <span className="text-[#FFB31F]">Premium Pack.</span>
                </p>
                </div>
                <div className="mx-5 flex justify-between mt-10">
                    <button
                        onClick={onClose}
                        className="px-8 py-2 bg-[#EDF1F8] text-blue rounded-3xl hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onUpgrade}
                        className="px-6 py-2 bg-blue text-white rounded-3xl hover:bg-blue-600"
                    >
                        Upgrade Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductLimitPopup;
