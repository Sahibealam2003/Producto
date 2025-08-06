import React from "react";

const NoProductMessage = () => {
  return (
   <div className="w-[100%] h-[100%] mx-auto mt-[10%] ">
     <div className="flex flex-col items-center justify-center  bg-white rounded-2xl  ">
      <svg
        className="w-16 h-16 text-red-500 mb-4 animate-bounce"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0Z"
        />
      </svg>
      <h2 className="text-xl font-bold text-gray-800 text-center px-4">
        Sorry, Product Item Not Available at this time
      </h2>
      <p className="text-sm text-gray-500 mt-2 px-6 text-center">
        Please try again later or explore other categories.
      </p>
    </div>
   </div>
  );
};

export default NoProductMessage;
