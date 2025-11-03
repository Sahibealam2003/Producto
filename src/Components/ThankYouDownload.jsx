import React from "react";
import { Link } from "react-router-dom";

const ThankYouDownload = () => {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-xl text-center">
        {/* Thank You Heading */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          🎉 Thank You!
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          You have successfully downloaded the <span className="font-bold">PRODUCTO. App</span>.  
          Start shopping smarter, faster, and easier today!
        </p>

        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <i className="fa-solid fa-circle-check text-green-500 text-6xl"></i>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition"
          >
            Go to Home
          </Link>

          <Link
            to="/login"
            className="bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition"
          >
            Login to App
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouDownload;
