import React, { useState } from "react";
import { useApi } from "../Utils/ApiContex";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { FadeLoader, PropagateLoader } from "react-spinners";

const HomePage = ({ query }) => {
  const [priceSort, setPriceSort] = useState("");
  const [ratingSort, setRatingSort] = useState("");
  const [showSortData, setShowSortData] = useState(false);

  const navigate = useNavigate();
  const { apiData } = useApi();

  const searchText = query.toLowerCase();
  const filteredData = apiData.filter((item) =>
    item.title.toLowerCase().includes(searchText)
  );

  let sortData = [...filteredData];

  // Apply price sort
  if (priceSort === "low") sortData.sort((a, b) => a.price - b.price);
  else if (priceSort === "high") sortData.sort((a, b) => b.price - a.price);

  // Apply rating sort
  if (ratingSort === "low") sortData.sort((a, b) => a.rating - b.rating);
  else if (ratingSort === "high") sortData.sort((a, b) => b.rating - a.rating);

  const handlePriceSort = (order) => {
    setPriceSort(order === priceSort ? "" : order);
    setRatingSort("");
  };

  const handleRatingSort = (order) => {
    setRatingSort(order === ratingSort ? "" : order);
    setPriceSort("");
  };

  return (
    <>
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
          <div className="relative w-[90%] max-w-4xl mx-auto flex items-center gap-4 border border-gray-300 rounded-lg px-4 py-2 shadow-sm">
            <div
              onClick={() => setShowSortData(!showSortData)}
              className="flex items-center gap-2 cursor-pointer px-2 py-1.5 border border-gray-300 rounded-md hover:bg-gray-100 transition"
            >
              <p className="text-sm font-medium text-gray-700">Filter</p>
              <svg
                className="w-4 h-4 text-gray-600"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                fillOpacity="0.92"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.4 5.999a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Zm1.6 0a2.8 2.8 0 0 1-5.485.8H1.81a.8.8 0 1 1 0-1.6h7.707a2.801 2.801 0 0 1 5.484.8ZM3.8 13.453a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4Zm0 1.6a2.8 2.8 0 1 1 2.684-3.6h7.711a.8.8 0 1 1 0 1.6h-7.71a2.801 2.801 0 0 1-2.685 2Z"
                />
              </svg>
            </div>

            <div className="flex-1">
              <input
                readOnly
                onClick={() => navigate("/search")}
                className="w-full text-sm p-2 px-5 border border-gray-300 rounded-md cursor-pointer focus:outline-none"
                placeholder="Search your preferred items here"
              />
            </div>

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

          <div className="w-[85%] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto grid gap-6 py-5">
            {filteredData.length === 0 ? (
              <p className="text-gray-600 col-span-full text-center text-lg">
                No products found for "{query}"
              </p>
            ) : (
              sortData.map((item) => (
                <div
                  key={item.id}
                  onClick={() => navigate(`/product/${item.id}`)}
                  className="cursor-pointer transition-transform duration-300 hover:scale-105 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100"
                >
                  <div className="relative">
                    <img
                      src={item.thumbnail ? item.thumbnail : <FadeLoader />}
                      alt={item.title}
                      className="w-full h-48 object-contain md:object-fill rounded-t-2xl"
                    />
                    <p className="absolute top-2 left-3 bg-black text-white text-xs font-semibold px-2 py-1 rounded">
                      {Math.round(item.discountPercentage)}% OFF
                    </p>
                    <div className="absolute top-2 right-5 flex items-center gap-1 bg-black text-white px-2 py-1 rounded shadow-sm">
                      <p className="text-xs flex gap-1 items-center font-semibold">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 20 20"
                          fill="none"
                          aria-hidden="true"
                        >
                          <circle
                            cx="10"
                            cy="10"
                            r="9"
                            fill="url(#ratingGradient)"
                          ></circle>
                          <path
                            d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                            fill="black"
                          />
                          <defs>
                            <linearGradient
                              id="ratingGradient"
                              x1="10"
                              y1="1"
                              x2="10"
                              y2="19"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="white" />
                              <stop offset="1" stopColor="white" />
                            </linearGradient>
                          </defs>
                        </svg>

                        <p>{item.rating}</p>
                      </p>
                    </div>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <h2 className="text-base font-semibold text-gray-800 truncate w-[70%]">
                      {item.title}
                    </h2>
                    <p className="text-gray-500 font-semibold text-sm">
                      ₹{item.price}
                    </p>
                  </div>
                </div>
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
