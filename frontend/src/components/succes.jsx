import React from "react";

const SuccessPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-1/2">
        <h2 className=" text-h1 text-start  text-2xl font-medium mb-4">The product has been added successfully!</h2>
        <button
          onClick={onClose}
          className="bg-blue text-white px-4 py-2 rounded-full place-self-end font-normal flex items-center"
          >
          Return to products
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
