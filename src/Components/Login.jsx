import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom"; 

const Login = () => {
  const nav = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      toast.error("Both fields are required!");
      return;
    }

    const userData = JSON.parse(localStorage.getItem("user"));

    const findUser = userData?.find(
      (item) => item.username === username && item.password === password
    );

    if (findUser) {
      toast.success("Login Successfully");
      localStorage.setItem("isLoggedIn", true);
      window.dispatchEvent(new Event("loginStatusChanged"));
      nav("/");
    } else {
      toast.error("Invalid Credential or User not found");
      return;
    }
  };

  return (
    <div className="flex justify-center items-center mt-10">
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
            className="w-full cursor-pointer bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition transform hover:scale-105"
          >
            Login
          </button>


          <p className="text-center text-gray-600 text-sm mt-3">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-black font-semibold hover:underline"
            >
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
