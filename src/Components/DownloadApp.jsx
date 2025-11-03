import React from "react";
import play from "../assets/play.png";
import appstore from "../assets/app.png";
import { Link } from "react-router-dom";

const DownloadApp = () => {
  return (
    // Main outer wrapper → centers content
    <div className="flex items-center justify-center mt-15">
      
      {/* Card container → white box with shadow */}
      <div className="bg-white shadow-2xl rounded-3xl p-5 w-full max-w-5xl flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left side → app details & buttons */}
        <div className="text-center lg:text-left flex-1">
          {/* App title */}
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            PRODUCTO. App
          </h1>

          {/* App short description */}
          <p className="text-gray-600 text-lg mb-6">
            Shop smarter, faster, and easier! Get exclusive deals and seamless
            shopping right at your fingertips.
          </p>

          {/* Features list */}
          <ul className="text-gray-700 space-y-3 mb-6">
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-check text-green-500"></i>
              Fast & Secure Checkout
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-check text-green-500"></i>
              Exclusive Discounts & Offers
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-check text-green-500"></i>
              Track Orders in Real-Time
            </li>
          </ul>

          {/* Download buttons → redirects to /thankyou for now */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            
            {/* Google Play button */}
            <Link
              to={'/thankyou'}
              className="flex items-center bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-900 transition shadow-lg"
            >
              <img src={play} alt="Play Store" className="h-6 mr-3" />
              <span className="font-semibold">Google Play</span>
            </Link>

            {/* App Store button */}
            <Link
              to={'/thankyou'}
              className="flex items-center bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-900 transition shadow-lg"
            >
              <img src={appstore} alt="App Store" className="h-6 mr-3" />
              <span className="font-semibold">App Store</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
