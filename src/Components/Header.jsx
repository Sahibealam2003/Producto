import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = ({ query, setQuery }) => {
  return (
    <header className="bg-gradient-to-b p-2 from-[#f94e30] to-[#ff6433] text-white">
      <div className="container mx-auto">
        <div className="">
          <div className="flex flex-col md:flex-row items-center justify-between border-b border-orange-400/60 text-sm py-2">
            {/* Left Top Section */}
            <div className="mb-1 md:mb-0">
              <ul className="flex items-center flex-wrap space-x-3 text-white">
                <li>
                  <Link to="/seller">Seller Center</Link>
                </li>
                <li className="border-l border-white h-4 mx-2"></li>
                <li>
                  <Link to="/download">Download</Link>
                </li>
                <li className="border-l border-white h-4 mx-2"></li>
                <li className="flex items-center space-x-2">
                  <span className="text-sm">Follow us on</span>
                  <ul className="flex items-center">
                    <li className="mx-2">
                      <a href="https://www.facebook.com" className="text-base">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li className="mx-2">
                      <a href="https://www.instagram.com" className="text-base">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Right Top Section */}
            <div>
              <ul className="flex items-center flex-wrap space-x-3">
                <li>
                  <Link to="/" className="flex items-center space-x-1">
                    <span className="text-base mx-1">
                      <i className="fa-solid fa-circle-question"></i>
                    </span>
                    <span className="text-sm">Support</span>
                  </Link>
                </li>
                <li className="border-l border-white h-4 mx-2"></li>
                <li>
                  <Link to="/">
                    <span className="text-sm">Register</span>
                  </Link>
                </li>
                <li className="border-l border-white h-4 mx-2"></li>
                <li>
                  <Link to="/">
                    <span className="text-sm">Log in</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* NavBar */}
          <div>
            <NavBar query={query} setQuery={setQuery} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
