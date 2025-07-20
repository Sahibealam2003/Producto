import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setSideBarOn } from "../Utils/sideBarSlice";
import SearchBar from "./SearchBar";

const NavBar = ({ query, setQuery }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <nav className="px-2 py-3">
      <div className="flex items-center justify-between flex-wrap">
        {/* Left */}
        <div className="flex  gap-3 items-center">
          <button
            onClick={() => dispatch(setSideBarOn())}
            type="button"
            className="cursor-pointer transform duration-200 hover:scale-103 text-white mr-3 mt-1 transition-opacity hover:opacity-90"
          >
            <i className="text-xl fas fa-bars"></i>
          </button>
          <Link
            to="/"
            className="transition transform duration-300 hover:scale-105 flex items-center text-[2.4rem]"
          >
            <i className="text-shimmer fa-solid fa-bag-shopping"></i>
            <span className="mx-2 font-bold text-shimmer">
              PRODUCTO<span className="font-normal">.</span>
            </span>
          </Link>
        </div>

        {/* Middle: Search */}
        <div className="flex items-center w-full lg:w-auto flex-grow lg:flex-grow-0">
          {(location.pathname === "/" ||
            location.pathname.startsWith("/categories/")) && (
            <SearchBar query={query} setQuery={setQuery} />
          )}
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
