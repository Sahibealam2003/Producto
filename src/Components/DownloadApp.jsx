import React from "react";
import play from '../assets/play.png';
import appstore from '../assets/app.png';

const DownloadApp = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl text-center">
        {/* Brand Info */}
        <h1 className="text-4xl font-bold text-gray-800 mb-2">PRODUCTO</h1>
        <p className="text-lg text-gray-600 mb-6">
          Shop anytime, anywhere! Download our mobile app for the best experience.
        </p>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <a
            href="#"
            className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
          >
            <img
              src={play}
              alt="Play Store"
              className="h-6 mr-2"
            />
            Play Store
          </a>

          <a
            href="#"
            className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
          >
            <img
              src={appstore}
              alt="App Store"
              className="h-6 mr-2"
            />
            App Store
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
