import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSideBarOff } from "../Utils/sideBarSlice";
import { Link, useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const { isSideBarOn } = useSelector((store) => store.sidebar);
  const dispatch = useDispatch();
  const [categoriesData, setCategoriesData] = useState("");

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://dummyjson.com/products/categories");
      const data = await res.json();
      setCategoriesData(data);
    }
    getData();
  }, []);

  return (
    <aside
      className={`fixed top-0 left-0 w-[300px] h-screen bg-white shadow-md px-8 py-8 z-[1000] transition-transform duration-300 ease-in-out ${
        isSideBarOn ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Close Button */}
      <button
        type="button"
        className="absolute right-8 top-8 text-xl transition-colors duration-300 hover:text-[#f94e30]"
        onClick={() => dispatch(setSideBarOff())}
      >
        <i className="fas fa-times"></i>
      </button>

      {/* Content */}
      <div className="mt-5">
        <div className="pb-4 text-[17px] uppercase font-semibold tracking-wide">
          All Categories
        </div>

        {/* Category List */}
        <ul className="overflow-y-scroll h-[calc(100vh-60px)] pr-2 custom-scroll">
          {categoriesData &&
            categoriesData.map((item) => {
              return (
                <li
                  onClick={() => {
                    dispatch(setSideBarOff());
                    navigate(`/categories/${item.slug}`);
                  }}
                  key={item.slug}
                  className="py-3 pr-4 border-b border-black/10"
                >
                  <Link className="text-[14px] cur font-[Manrope] tracking-wide transition-all hover:text-[#f94e30] hover:ml-2">
                    {item.name}
                  </Link>
                </li>
              );
            })}
          {/* Example List Items: Replace or map from data */}

          {/* ... add more list items as needed */}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
