import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setSideBarOn } from "../Utils/sideBarSlice";
import SearchBar from "./SearchBar";

const NavBar = ({ query, setQuery }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  // 🛒 Redux se cart ke total items la raha hai
  const totalQuantity = useSelector((store) => store.cart.totalQuantity);

  return (
    <nav className="px-3 py-2 bg-black text-white">
      <div className="flex flex-wrap items-center justify-between gap-4">

        <div className="flex items-center gap-4">
          {/* ☰ Sidebar open karne ka button */}
          <button
            onClick={() => dispatch(setSideBarOn())}
            type="button"
            className="text-white cursor-pointer text-xl hover:opacity-90 hover:scale-105 transition duration-200"
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* Logo, click karne par homepage pe le jata hai aur search query reset hoti hai */}
          <div
            onClick={() => {
              navigate("/");
              setQuery("");
            }}
            className="flex items-center text-[2rem] hover:scale-105 transition duration-300 cursor-pointer"
          >
            <i className="fa-solid fa-bag-shopping text-shimmer"></i>
            <span className="ml-2 font-bold text-shimmer">
              PRODUCTO<span className="font-normal">.</span>
            </span>
          </div>
        </div>

        {/* Cart icon jaha total items count dikh raha hai */}
        <div
          className="relative text-[1.8rem] cursor-pointer hover:scale-105 transition duration-200"
          onClick={() => navigate("/product/cart")}
        >
          <i className="fa-solid fa-cart-shopping"></i>

          {/* Agar cart me items hai toh number badge dikhega */}
          {totalQuantity > 0 && (
            <div className="absolute -top-2 -right-2 bg-white text-black text-xs font-semibold w-[20px] h-[20px] rounded-full flex items-center justify-center">
              {totalQuantity}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
