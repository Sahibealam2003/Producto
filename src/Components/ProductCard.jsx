import React, { useState } from "react";
import ImageLoader from "../Components/ImageLoader";
import toast from "react-hot-toast";

const ProductCard = ({ item, navigate }) => {
  const [loading, setLoading] = useState(true); // image load check karne ke liye state
  const isLoggedIn = localStorage.getItem('isLoggedIn')
 const handleCardClick = () => {
    if (isLoggedIn === "true") { // login detail check kre ga
      navigate(`/product/${item.id}`); // product detail page par le jayega
    } else {
      toast.error("Please login to view product details");
    }
  };
  return (
    <div
      key={item.id}
      onClick={handleCardClick} 
      className="cursor-pointer transition-transform duration-300 hover:scale-105 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100"
    >
      <div className="relative ">
        {/* jab tak image load nahi hoti tab tak loader dikhana */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white rounded-t-2xl">
            <ImageLoader />
          </div>
        )}

        <img
          src={item.thumbnail || "KUCHBHI"}
          alt={item.title}
          onLoad={() => setLoading(false)} // image load hone ke baad loader hat jayega
          className={`w-full h-48 object-contain md:object-fill rounded-t-2xl transition-opacity duration-500 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* discount percentage badge */}
        <p className="absolute top-2 left-3 bg-black text-white text-xs font-semibold px-2 py-1 rounded">
          {Math.round(item.discountPercentage)}% OFF
        </p>

        {/* rating badge */}
        <div className="absolute top-2 right-5 flex items-center gap-1 bg-black text-white px-2 py-1 rounded shadow-sm">
          <div className="text-xs flex gap-1 items-center font-semibold">
            ⭐ <p>{item.rating || 4.1}</p>
          </div>
        </div>
      </div>

      <div className="p-4 flex items-center justify-between">
        {/* product title */}
        <h2 className="text-base font-semibold text-gray-800 truncate w-[70%]">
          {item.title}
        </h2>
        {/* product price */}
        <p className="text-gray-500 font-semibold text-sm">₹{item.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
