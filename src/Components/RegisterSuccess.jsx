import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl px-8 py-10 text-center max-w-md w-[90%]">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          🎉 Registration Successful!
        </h1>
        <p className="text-gray-700 mb-6">
          Thank you for registering. Your account has been created successfully.
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition transform hover:scale-105"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default RegisterSuccess;
