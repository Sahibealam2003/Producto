import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const nav = useNavigate();

  //states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

  //handle register
  const handleRegister = () => {
    if (!name || !email || !username || !password || !number) {
      toast.error("All fields are required!");
      return;
    }

    const data = { name, email, username, password, number };

    let existUser = JSON.parse(localStorage.getItem("user")) || [];

    const foundUser = existUser.find(
      (item) =>
        item.username === username ||
        item.email === email ||
        item.number === number
    );
    if (foundUser) {
      toast.error("User already exists");
      return;
    }

    if (!Array.isArray(existUser)) {
      existUser = [];
    }

    existUser.push(data);

    localStorage.setItem("user", JSON.stringify(existUser));

    toast.success("Registered Successfully!");
    nav("/registersuccess");
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-2xl px-8 py-4 w-[90%] max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Register
        </h1>

        <div className="space-y-4">
          {/* Full Name input */}
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Email input */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Username input */}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Password input */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Phone number input */}
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Phone Number"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Register button */}
          <button
            onClick={handleRegister}
            className="w-full bg-black cursor-pointer text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition transform hover:scale-105"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
