import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSideBarOff } from "../Utils/sideBarSlice";
import { Link, useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const { isSideBarOn } = useSelector((store) => store.sidebar);
  const dispatch = useDispatch();
  const [categoriesData, setCategoriesData] = useState([]);
   const [error, setError] = useState(null);

  // Fetch category list from API
try {
  
    useEffect(() => {
    async function getData() {
      const res = await fetch("https://dummyjson.com/products/categories");
      if(!res) return setError("Failed to load categories.")
      const data = await res.json();
      setCategoriesData(data);
    }
    getData();
  }, []);

} catch (err) {

setError("Failed to load categories.")
setCategoriesData([]);
  
}

  return (
    // Sidebar container
    <aside
      className={`fixed top-0 left-0 w-[260px] sm:w-[300px] h-screen bg-white shadow-md px-6 py-6 sm:px-8 sm:py-8 z-[1000] transition-transform duration-300 ease-in-out ${
        isSideBarOn ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Close button in top-right corner */}
      <button
        type="button"
        className="absolute right-6 top-6 sm:right-8 sm:top-8 text-xl cursor-pointer transition-colors duration-300 hover:text-gray-500"
        onClick={() => dispatch(setSideBarOff())}
      >
        <i className="fas fa-times"></i>
      </button>

      {/* Sidebar Heading */}
      <div className="mt-8 sm:mt-10">
        <div className="pb-4 text-[16px] sm:text-[17px] uppercase font-semibold tracking-wide">
          All Categories
        </div>

        {/* Scrollable Category List */}
        <ul className="overflow-y-scroll h-[calc(100vh-120px)] pr-2 custom-scroll">
          {categoriesData ? (
            categoriesData.map((item) => (
              <li
                key={item.slug}
                onClick={() => {
                  dispatch(setSideBarOff());
                  navigate(`/categories/${item.slug}`);
                }}
                className="py-3 border-b border-black/10 cursor-pointer"
              >
                <Link className="block text-sm sm:text-[14px] font-[Manrope] tracking-wide transition-all hover:text-gray-500 hover:ml-2">
                  {item.name}
                </Link>
              </li>
            ))
          ) : <div>
            {error}
          </div>
          }
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
