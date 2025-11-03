import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterSuccess = () => {
  const navigate = useNavigate(); // navigation ke liye hook

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Success card container */}
      <div className="bg-white shadow-lg rounded-2xl px-8 py-10 text-center max-w-md w-[90%]">
        
        {/* Success message */}
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          🎉 Registration Successful!
        </h1>

        <p className="text-gray-700 mb-6">
          Thank you for registering. Your account has been created successfully.
        </p>

        {/* Button jo click hone pe home page le jata hai */}
        <button
          onClick={() => navigate("/login")}
          className="bg-black cursor-pointer text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition transform hover:scale-105"
        >
          Please login
        </button>
      </div>
    </div>
  );
};

export default RegisterSuccess;
