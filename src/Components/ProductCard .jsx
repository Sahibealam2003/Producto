import React, { useState } from "react";
import ImageLoader from "../Components/ImageLoader";

const ProductCard = ({ item, navigate }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div
      key={item.id}
      onClick={() => navigate(`/product/${item.id}`)}
      className="cursor-pointer  transition-transform duration-300 hover:scale-105 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100"
    >
      <div className="relative ">
        {/* Loader dikhega jab tak image load nahi hoti */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white rounded-t-2xl">
            <ImageLoader />
          </div>
        )}

        <img
          src={item.thumbnail || "KUCHBHI" }
          alt={item.title}
          onLoad={() => setLoading(false)} // image load hone par loader hat jayega
          className={`w-full h-48 object-contain md:object-fill rounded-t-2xl transition-opacity duration-500 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
        />

        <p className="absolute top-2 left-3 bg-black text-white text-xs font-semibold px-2 py-1 rounded">
          {Math.round(item.discountPercentage)}% OFF
        </p>

        <div className="absolute top-2 right-5 flex items-center gap-1 bg-black text-white px-2 py-1 rounded shadow-sm">
          <div className="text-xs flex gap-1 items-center font-semibold">
            ⭐ <p>{item.rating || 4.1}</p>
          </div>
        </div>
      </div>

      <div className="p-4 flex items-center justify-between">
        <h2 className="text-base font-semibold text-gray-800 truncate w-[70%]">
          {item.title}
        </h2>
        <p className="text-gray-500 font-semibold text-sm">₹{item.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
