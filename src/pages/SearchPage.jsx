import React from "react";
import { useLocation } from "react-router-dom";
import { useApi } from "../Utils/ApiContex";

const SearchPage = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q");
  const { apiData } = useApi();

  // Filter products by title using query
  const filteredProducts = apiData?.filter((item) =>
    item.title.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <div className="border border-white px-6 py-4">
      <h1 className="text-xl font-semibold mb-4">
        Search Results for:{" "}
        <span className="text-[#f94e30]">"{query || "..."}"</span>
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredProducts?.length > 0 ? (
          filteredProducts.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded">
                  {item.discountPercentage}% OFF
                </div>
              </div>
              <div className="mt-3">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h2>
                <div className="flex items-center gap-1 mt-2">
                  <i className="fa-solid fa-star text-yellow-400 text-sm"></i>
                  <span className="text-sm font-medium text-gray-600">
                    {item.rating}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
