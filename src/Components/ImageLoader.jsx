import React from "react";

const ImageLoader = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-10 h-10 rounded-full animate-spin bg-gradient-to-tr from-blue-400 to-blue-600 p-[3px]">
        <div className="w-full h-full rounded-full bg-white"></div>
      </div>
    </div>
  );
};

export default ImageLoader;
