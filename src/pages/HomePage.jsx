import React from "react";
import { useApi } from "../Utils/ApiContex";
import Footer from '../Components/Footer';
import { useNavigate } from "react-router-dom";

const HomePage = ({ query }) => {
  const navigate = useNavigate();
  const { apiData } = useApi();

  const searchText = query.toLowerCase();
  const filteredData = apiData.filter(item =>
    item.title.toLowerCase().includes(searchText)
  );

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {filteredData.length === 0 ? (
          <p className="text-gray-600 col-span-full text-center text-lg">
            No products found for "{query}"
          </p>
        ) : (
          filteredData.map((item) => (
            <div
              onClick={() => navigate(`/product/${item.id}`)}
              key={item.id}
              className="cursor-pointer  transition transform duration-300 hover:scale-103 bg-white rounded-2xl shadow-md hover:shadow-xl  border border-gray-100"
            >
              <div className="relative">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-[280px] h-48 object-fill rounded-t-2xl"
                />
                <p className="absolute top-2 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  {Math.round(item.discountPercentage)}% OFF
                </p>
                <div className="absolute top-2 right-5 flex items-center gap-1">
                  <span className="text-sm font-medium text-white bg-[#f94e30] px-1.5 py-0.5 rounded">
                    {item.rating}
                  </span>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <h2 className="text-base font-semibold text-gray-800 truncate">
                  {item.title}
                </h2>
                <p className="text-[#f94e30] font-semibold text-sm">${item.price}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
