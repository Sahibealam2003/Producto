import React, { useState } from "react";
import { useApi } from "../Utils/ApiContex";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import ProductCard from "../Components/ProductCard";

const HomePage = ({ query }) => {
  // states for sorting
  const [priceSort, setPriceSort] = useState("");
  const [ratingSort, setRatingSort] = useState("");
  const [showSortData, setShowSortData] = useState(false);

  const navigate = useNavigate();
  const { apiData } = useApi(); // custom hook se product data aa raha hai

  // search filter
  const searchText = query.toLowerCase();
  const filteredData = apiData.filter((item) =>
    item.title.toLowerCase().includes(searchText)
  );

  let sortData = [...filteredData];

  // price sort logic
  if (priceSort === "low") sortData.sort((a, b) => a.price - b.price);
  else if (priceSort === "high") sortData.sort((a, b) => b.price - a.price);

  // rating sort logic
  if (ratingSort === "low") sortData.sort((a, b) => a.rating - b.rating);
  else if (ratingSort === "high") sortData.sort((a, b) => b.rating - a.rating);

  // price sort toggle
  const handlePriceSort = (order) => {
    setPriceSort(order === priceSort ? "" : order);
    setRatingSort("");
  };

  // rating sort toggle
  const handleRatingSort = (order) => {
    setRatingSort(order === ratingSort ? "" : order);
    setPriceSort("");
  };



  return (
    <>
      {/* loader jab tak data nahi aata */}
      {apiData.length === 0 ? (
        <div className="flex items-center justify-center h-[50vh] w-full bg-white">
          <PropagateLoader
            color="black"
            loading={true}
            size={40}
            speedMultiplier={1}
          />
        </div>
      ) : (
        <div className="bg-gray-100 pt-5">
          {/* top search and filter bar */}
          <div className="relative w-[90%] max-w-4xl mx-auto flex items-center gap-4 border border-gray-300 rounded-lg px-4 py-2 shadow-sm">
            {/* filter button */}
            <div
              onClick={() => setShowSortData(!showSortData)}
              className="flex items-center gap-2 cursor-pointer px-2 py-1.5 border border-gray-300 rounded-md hover:bg-gray-100 transition"
            >
              <p className="text-sm font-medium text-gray-700">Filter</p>
            </div>

            {/* search box (sirf redirect karta hai search page pe) */}
            <div className="flex-1">
              <input
                readOnly
                onClick={() => navigate("/search")}
                className="w-full text-sm p-2 px-5 border border-gray-300 rounded-md cursor-pointer focus:outline-none"
                placeholder="Search your preferred items here"
              />
            </div>

            {/* filter dropdown */}
            {showSortData && (
              <div className="absolute top-[109%] w-[40%] left-[2%] bg-gray-200 border border-gray-300 rounded-lg shadow-md p-4 z-10">
                <div className="mb-4">
                  <h3 className="font-semibold mb-2 text-gray-700">
                    Sort By Price
                  </h3>
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={priceSort === "low"}
                        onChange={() => handlePriceSort("low")}
                      />
                      <span className="text-sm text-gray-600">Low to High</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={priceSort === "high"}
                        onChange={() => handlePriceSort("high")}
                      />
                      <span className="text-sm text-gray-600">High to Low</span>
                    </label>
                  </div>
                </div>
                <hr className="border border-[rgba(210,214,225,0.5)]" />
                <div className="mb-4">
                  <h3 className="font-semibold mb-2 text-gray-700">
                    Sort By Rating
                  </h3>
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={ratingSort === "low"}
                        onChange={() => handleRatingSort("low")}
                      />
                      <span className="text-sm text-gray-600">Low to High</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={ratingSort === "high"}
                        onChange={() => handleRatingSort("high")}
                      />
                      <span className="text-sm text-gray-600">High to Low</span>
                    </label>
                  </div>
                </div>
                {/* close dropdown button */}
                <div className="flex justify-end underline text-xs">
                  <p
                    onClick={() => setShowSortData(false)}
                    className="cursor-pointer hover:text-red-600"
                  >
                    Close
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* product list grid */}
          <div className="w-[85%] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto grid gap-6 py-5">
            {filteredData.length <= 0 ? (
              <p className="text-center text-gray-500 font-medium col-span-full">
                No products found
              </p>
            ) : (
              sortData.map((item) => (
                <ProductCard key={item.id} item={item} navigate={navigate} />
              ))
            )}
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default HomePage;
