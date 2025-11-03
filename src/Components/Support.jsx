import React from "react";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 relative">
      {/* Back button for navigation */}
      <div className="absolute top-6 left-6">
        <Link
          to="/"
          className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition"
        >
          <i className="fa-solid fa-arrow-left"></i>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Page header */}
      <div className="text-center max-w-2xl mb-10 mt-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          How can we help you? 🤝
        </h1>
        <p className="text-gray-600 text-lg">
          Welcome to PRODUCTO Support. Find answers to common questions or reach out to us directly.
        </p>
      </div>

      {/* Support categories grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
        
        {/* Orders section */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition">
          <i className="fa-solid fa-box text-4xl text-blue-500 mb-4"></i>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Orders</h2>
          <p className="text-gray-600 text-sm mb-3">
            Track your order status, delivery updates, and history.
          </p>
          <button className="text-blue-500 hover:underline">Learn More</button>
        </div>

        {/* Payments section */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition">
          <i className="fa-solid fa-credit-card text-4xl text-green-500 mb-4"></i>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Payments</h2>
          <p className="text-gray-600 text-sm mb-3">
            Issues with payment, refunds, or transactions.
          </p>
          <button className="text-green-500 hover:underline">Learn More</button>
        </div>

        {/* Returns section */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition">
          <i className="fa-solid fa-rotate-left text-4xl text-red-500 mb-4"></i>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Returns</h2>
          <p className="text-gray-600 text-sm mb-3">
            Easy return process, refund timelines, and replacement policy.
          </p>
          <button className="text-red-500 hover:underline">Learn More</button>
        </div>

        {/* Account section */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition">
          <i className="fa-solid fa-user text-4xl text-purple-500 mb-4"></i>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Account</h2>
          <p className="text-gray-600 text-sm mb-3">
            Manage your profile, password, and personal details.
          </p>
          <button className="text-purple-500 hover:underline">Learn More</button>
        </div>

        {/* Shipping section */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition">
          <i className="fa-solid fa-truck text-4xl text-orange-500 mb-4"></i>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Shipping</h2>
          <p className="text-gray-600 text-sm mb-3">
            Delivery times, shipping costs, and international orders.
          </p>
          <button className="text-orange-500 hover:underline">Learn More</button>
        </div>

        {/* Offers section */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition">
          <i className="fa-solid fa-tags text-4xl text-pink-500 mb-4"></i>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Offers</h2>
          <p className="text-gray-600 text-sm mb-3">
            Explore discounts, promo codes, and special deals.
          </p>
          <button className="text-pink-500 hover:underline">Learn More</button>
        </div>
      </div>

      {/* Contact support options */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Still need help?</h2>
        <p className="text-gray-600 mb-6">Our team is available 24/7 to assist you.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:support@producto.com"
            className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-700 transition"
          >
            📧 Email Support
          </a>
          <a
            href="tel:+123456789"
            className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-700 hover:cursor-pointer transition"
          >
            📞 Call Us
          </a>
          <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-600 hover:cursor-pointer transition">
            💬 Live Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Support;
