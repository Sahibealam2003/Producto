import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = ({ query, setQuery }) => {
  return (
    <header className="bg-black text-white p-2">
      <div className="container mx-auto px-4">
        {/* Top Bar Section */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-600 py-2 text-sm">
          
          {/*  Left Section  */}
          <div className="mb-2 md:mb-0 w-full md:w-auto text-center md:text-left">
            <ul className="flex flex-wrap justify-center md:justify-start items-center text-white gap-2 md:gap-3">
              <li>
                <Link to="/seller" className="hover:underline">
                  Seller Center
                </Link>
              </li>

              <li className="hidden md:inline border-l border-white h-4"></li>

              <li>
                <Link to="/download" className="hover:underline">
                  Download
                </Link>
              </li>

              <li className="hidden md:inline border-l border-white h-4"></li>

              {/* Social Icons */}
              <li className="flex items-center gap-2">
                <span>Follow us on</span>
                <ul className="flex items-center gap-2">
                  <li>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base hover:text-blue-500"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base hover:text-pink-400"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Right Section - Support, Register, Login */}
          <div className="w-full md:w-auto text-center md:text-right">
            <ul className="flex flex-wrap justify-center md:justify-end items-center gap-2 md:gap-3">
              <li>
                <Link to="/" className="flex items-center gap-1 hover:underline">
                  <i className="fa-solid fa-circle-question text-base" />
                  <span>Support</span>
                </Link>
              </li>

              <li className="hidden md:inline border-l border-white h-4"></li>

              <li>
                <Link to="/register" className="hover:underline">
                  Register
                </Link>
              </li>

              <li className="hidden md:inline border-l border-white h-4"></li>

              <li>
                <Link to="/login" className="hover:underline">
                  Log in
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/*  Main Navigation Bar */}
        <div className="mt-2">
          <NavBar query={query} setQuery={setQuery} />
        </div>
      </div>
    </header>
  );
};

export default Header;
