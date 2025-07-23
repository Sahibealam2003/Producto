import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setSideBarOn } from "../Utils/sideBarSlice";
import SearchBar from "./SearchBar";

const NavBar = ({ query, setQuery }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <nav className="px-3 py-2 bg-black text-white">
      {/* Wrapper Flexbox for Navbar */}
      <div className="flex flex-wrap items-center justify-between gap-4">

        {/*  Left: Sidebar Toggle + Logo */}
        <div className="flex items-center gap-4">
          {/* Sidebar Button */}
          <button
            onClick={() => dispatch(setSideBarOn())}
            type="button"
            className="text-white  cursor-pointer text-xl hover:opacity-90 hover:scale-105 transition duration-200"
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center text-[2rem] hover:scale-105 transition duration-300"
          >
            <i className="fa-solid fa-bag-shopping text-shimmer"></i>
            <span className="ml-2 font-bold text-shimmer">
              PRODUCTO<span className="font-normal">.</span>
            </span>
          </Link>
        </div>

        {/*  Middle: Search Bar (Conditional) */}
        {(location.pathname === "/" ||
          location.pathname.startsWith("/categories/")) && (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-[40%]">
            <SearchBar query={query} setQuery={setQuery} />
          </div>
        )}

        {/*  Right: Cart Icon */}
        <div className="relative text-[1.8rem]">
          <Link  className="relative">
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="absolute -top-2 -right-2 bg-white text-black text-xs font-semibold w-[20px] h-[20px] rounded-full flex items-center justify-center">
              0
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
