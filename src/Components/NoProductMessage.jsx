import React from "react";
import { useNavigate } from "react-router-dom";

const NoProductMessage = () => {
  const nav = useNavigate(); // hook for navigation

  return (
    <div className="w-[100%] h-[100%] mx-auto mt-[10%]">
      <div className="flex flex-col items-center justify-center bg-white rounded-2xl">
        
        {/* Error heading */}
        <h2 className="text-xl font-bold text-gray-800 text-center px-4">
          Sorry, Product Item Not Available at this time
        </h2>

        {/* Small info text */}
        <p className="text-sm text-gray-500 mt-2 px-6 text-center">
          Please try again later or explore other categories.
        </p>

        {/* Button to go back home */}
        <button
          onClick={() => nav("/")}
          className="mt-6 px-6 py-2 bg-black text-white text-sm font-semibold rounded-lg shadow-md hover:bg-gray-700 transition-all"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NoProductMessage;
