import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SellerCenter = () => {
  const navigate = useNavigate();

  // Seller / Company Info
  const sellerInfo = {
    name: "PRODUCTO",
    tagline: "Trusted Marketplace for Quality Products",
    email: "support@producto.com",
    phone: "+91 9876543210",
    address: "456 Tech Park, Bengaluru, India",
    about:
      "PRODUCTO connects buyers with quality products. We focus on customer satisfaction, reliable service, and affordable pricing. Explore our diverse product catalog below.",
  };

  // Sample product list
  const [products] = useState([
    {
      id: 1,
      title: "Wireless Headphones",
      price: 2499,
      thumbnail:
        "https://shorturl.at/Vcoas",
    },
    {
      id: 2,
      title: "Smart Watch",
      price: 3999,
      thumbnail: "https://shorturl.at/08v6Y",
    },
    {
      id: 3,
      title: "Gaming Laptop",
      price: 75999,
      thumbnail: "https://shorturl.at/4FrC6",
    },
   
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Seller Info */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {sellerInfo.name}
        </h1>
        <p className="text-lg text-gray-600 mb-4">{sellerInfo.tagline}</p>
        <p>
          <span className="font-semibold">Email:</span> {sellerInfo.email}
        </p>
        <p>
          <span className="font-semibold">Phone:</span> {sellerInfo.phone}
        </p>
        <p>
          <span className="font-semibold">Address:</span> {sellerInfo.address}
        </p>
        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">About Us</h2>
          <p className="text-gray-700">{sellerInfo.about}</p>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-xl p-4 shadow hover:shadow-lg transition"
            >
            
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-lg">{product.title}</h3>
              <p className="text-gray-600">₹ {product.price}</p>
              <button className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="flex justify-center mt-6">
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

export default SellerCenter;
