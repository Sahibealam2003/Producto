import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSideBarOn } from '../Utils/sideBarSlice';

const NavBar = () => {
  

  const {isSideBarOn}=useSelector(store => store.sidebar)
  console.log(isSideBarOn);
  
  const dispatch=useDispatch()
  return (
    <nav className="px-2 py-3">
      <div className="flex items-center justify-between flex-wrap">
        {/* Left: Brand and toggler */}
        <div className="flex items-center">
          <button
          onClick={()=>dispatch((setSideBarOn()))}
            type="button"
            className="text-white mr-3 mt-1 transition-opacity hover:opacity-90"
          >
            <i className="fas fa-bars"></i>
          </button>
          <Link to="/" className="flex items-center text-[2.4rem]">
            <span>
              <i className="fa-solid fa-bag-shopping"></i>
            </span>
            <span className="mx-2 font-bold">
              PRODUCTO<span className="font-normal">.</span>
            </span>
          </Link>
        </div>

        {/* Middle: Search and Nav */}
        <div className="flex items-center w-full lg:w-auto flex-grow lg:flex-grow-0">
          {/* Search */}
          <div className="bg-white  px-4 py-1 ml-8 rounded shadow-md hidden sm:flex flex-grow max-w-xl">
            <input
              type="text"
              className="w-full text-[14px] text-black/80 px-4 outline-none placeholder:text-[13.5px] placeholder:tracking-wide placeholder:font-[Manrope]"
              placeholder="Search your preferred items here"
            />
            <Link
              to="/"
              className="flex items-center justify-center text-white bg-[#f94e30] w-[60px] h-[32px]"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </Link>
          </div>

          {/* Nav links */}
          <ul className="hidden lg:flex items-center ml-8 mt-2 text-xs font-normal font-[Manrope]">
            <li className="mr-4 whitespace-nowrap">
              <Link to="/" className="capitalize hover:opacity-95 transition-opacity">
                {/* nav text here */}
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Cart */}
        <div className="flex items-center ml-8 text-[2rem] relative">
          <Link to="/" className="relative">
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="absolute -top-2 -right-2 bg-white text-[#f94e30] text-[14px] font-medium w-[22px] h-[22px] rounded-full flex items-center justify-center">
              0
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
