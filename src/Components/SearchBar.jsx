import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchSkeleton from "../pages/SearchSkeleton";

const SearchBar = ({ query, setQuery }) => {
  const [resultFound,setResultFound] =useState(false)
  const [result, setResult] = useState([]);
  const navigate = useNavigate();
    
  useEffect(() => {
    if (query.trim() === "") {
      setResult([]);
      setResultFound(false)
      return;
    }

    setResult([])
    setResultFound(false)


     const timer = setTimeout(() => {
      setResultFound(true);
    }, 1000);


    const searchData = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
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

  return (
    <div className="w-[90%] sm:w-[80%] mx-auto mt-6 ">
      {/* Search Input */}
      <div className="flex items-center bg-white rounded-lg shadow px-4 py-2 border border-gray-300">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          className="w-full h-10 text-sm text-gray-800 px-3 outline-none placeholder:text-sm placeholder:text-gray-400 tracking-wide"
          placeholder="Search your preferred items here"
        />
      </div>

      {/* Results */}
      {query && (
        <div className="mt-4 max-h-[60vh] overflow-y-auto space-y-3">
          {result.length > 0 ? (
            result.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/product/${item.id}`)}
                className="flex items-center gap-4 border border-gray-300 rounded-lg p-3 bg-white hover:shadow-md transition-all cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md ">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex justify-between w-full">
                  {/* Left Side - Title Info */}
                  <div className="flex flex-col justify-center">
                    <p className="text-xs text-yellow-600 font-semibold mb-1">
                      {item.discountPercentage}% OFF
                    </p>
                    <h3 className="text-base font-semibold text-gray-800 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-blue-700 font-medium mt-1">
                      Price: ₹{item.price}
                    </p>
                  </div>

                  {/* Right Side - Details */}
                  <div className="flex flex-col text-right gap-1">
                    <p className="text-xs text-gray-500">Brand: {item.brand}</p>
                    <p className="text-xs text-green-700">In Stock: {item.stock}</p>
                    <p className="text-xs text-gray-600">
                      Rating: <span className="text-yellow-500">⭐ {item.rating}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            resultFound ?   <p className="text-center text-sm text-gray-500 py-4">No results found</p> :<SearchSkeleton/>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;




