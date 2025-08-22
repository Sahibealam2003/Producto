import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const nav= useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      toast.error("Both fields are required!");
      return;
    }

    
    if (username === "admin" && password === "1234") {
      toast.success("Login Successful!");
      nav('/')
    } else {
      toast.error("Invalid username or password!");
    }
  };

  return (
    <div className="flex justify-center items-center mt-10 ">
      <div className="bg-white shadow-lg rounded-2xl px-8 py-10 w-[90%] max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h1>

        <div className="space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition transform hover:scale-105"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
