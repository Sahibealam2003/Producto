import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchSkeleton from "../pages/SearchSkeleton";
import { useApi } from "../Utils/ApiContex";

const SearchBar = ({ query, setQuery }) => {
  // sorting
  const [priceSort, setPriceSort] = useState("");
  const [ratingSort, setRatingSort] = useState("");
  // filter dropdown
  const [showSortData, setShowSortData] = useState(false);
  // result 
  const [resultFound, setResultFound] = useState(false);
  const [result, setResult] = useState([]);

  const navigate = useNavigate();
  const { apiData } = useApi();


  useEffect(() => {
    if (query.trim() === "") {
      setResult([]);
      setResultFound(false);
      return;
    }

    setResult([]);
    setResultFound(false);

    
    const timer = setTimeout(() => {
      setResultFound(true);
    }, 1000);

    const searchData = async () => {
      try {
       
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`
        );
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setResult(data.products);
        if (data.products.length > 0) {
          clearTimeout(timer);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
        setResult([]);
      }
    };

    searchData();
  }, [query]);

  const sortedResults = [...result];

  if (priceSort === "low") sortedResults.sort((a, b) => a.price - b.price);
  else if (priceSort === "high") sortedResults.sort((a, b) => b.price - a.price);

  if (ratingSort === "low") sortedResults.sort((a, b) => a.rating - b.rating);
  else if (ratingSort === "high") sortedResults.sort((a, b) => b.rating - a.rating);

  // price sort 
  const handlePriceSort = (order) => {
    setPriceSort(order === priceSort ? "" : order);
    setRatingSort("");
  };

  // rating sort 
  const handleRatingSort = (order) => {
    setRatingSort(order === ratingSort ? "" : order);
    setPriceSort("");
  };

  return (
    <div className="w-[90%] sm:w-[80%] mx-auto mt-6">
    
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        
     
        <button
          onClick={() => setShowSortData(!showSortData)}
          className="flex cursor-pointer items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 shadow-sm transition"
        >
          <span>Filter</span>
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
        </button>

 
        <div className="flex-grow w-full sm:w-auto">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search your preferred items here"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

   
      {showSortData && (
        <div className="relative mt-4 z-20">
          <div className="absolute w-full max-w-sm bg-white border border-gray-300 rounded-md shadow-lg p-4">
            
         
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Sort by Price</h4>
              <div className="space-y-2">
                <label className="flex items-center text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={priceSort === "low"}
                    onChange={() => handlePriceSort("low")}
                    className="mr-2"
                  />
                  Low to High
                </label>
                <label className="flex items-center text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={priceSort === "high"}
                    onChange={() => handlePriceSort("high")}
                    className="mr-2"
                  />
                  High to Low
                </label>
              </div>
            </div>

            <hr className="border-t border-gray-200 my-2" />

            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Sort by Rating</h4>
              <div className="space-y-2">
                <label className="flex items-center text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={ratingSort === "low"}
                    onChange={() => handleRatingSort("low")}
                    className="mr-2"
                  />
                  Low to High
                </label>
                <label className="flex items-center text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={ratingSort === "high"}
                    onChange={() => handleRatingSort("high")}
                    className="mr-2"
                  />
                  High to Low
                </label>
              </div>
            </div>

        
            <div className="mt-4 text-right">
              <button
                onClick={() => setShowSortData(false)}
                className="text-xs cursor-pointer text-gray-500 hover:text-red-500 hover:underline"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

  
      {query && (
        <div className="mt-6 space-y-4 max-h-[60vh] overflow-y-auto">
          {sortedResults.length > 0 ? (
            sortedResults.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/product/${item.id}`)} 
                className="flex items-center gap-4 border border-gray-200 rounded-lg p-4 bg-white hover:shadow-md transition cursor-pointer"
              >
                
                <div className="w-20 h-20 rounded overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                
                <div className="flex justify-between w-full items-center">
                  <div>
                    <h3 className="text-base font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-blue-600 font-medium mt-1">₹{item.price}</p>
                    <p className="text-xs text-yellow-500 mt-0.5">{item.discountPercentage}% OFF</p>
                  </div>
                  <div className="text-xs text-right text-gray-500 space-y-1">
                    <p>Brand: {item.brand}</p>
                    <p>Stock: {item.stock}</p>
                    <p>Rating: ⭐ {item.rating}</p>
                  </div>
                </div>
              </div>
            ))
          ) : resultFound ? (
            <p className="text-center text-sm text-gray-500">No results found</p>
          ) : (
            <SearchSkeleton /> 
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
