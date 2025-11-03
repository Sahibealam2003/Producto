import React, { useState } from "react";
import { useApi } from "../Utils/ApiContex";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import NoProductMessage from "../Components/NoProductMessage";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  clearCart,
  decreaseQty,
  increaseQty,
  removeItem,
} from "../Utils/cartSlice";
import toast from "react-hot-toast";
import ImageLoader from "../Components/ImageLoader";

const ProductSinglePage = () => {
  const nav = useNavigate();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { id } = useParams();
  const productId = Number(id);
  const { apiData } = useApi();
  const cartData = useSelector((store) => store.cart);
  const cartItem = cartData.items.find((item) => item.id === productId);

  // Find product from apiData by id
  const findData = apiData.find((item) => item.id === productId);

  // Show loading when apiData not ready
  if (!apiData || apiData.length === 0) {
    return (
      <div className="flex justify-center items-center mt-[15%]">
        <p className="text-gray-600 text-lg animate-pulse">
          Loading product...
        </p>
      </div>
    );
  }

  // Show message if product not found
  if (!findData) {
    return <NoProductMessage />;
  }

  // Function for adding product to cart
  const handleAddToCart = () => {
    if (findData.stock <= 0) {
      alert("Out of stock");
      return;
    }

    const payload = {
      id: findData.id,
      title: findData.title,
      price: Number(findData.price),
      thumbnail: findData.thumbnail,
    };

    dispatch(addItem(payload));
  };

  return (
    <>
      <div>
        {/* Product Section */}
        <div className="w-[90%] md:w-[85%] mx-auto flex flex-col md:flex-row gap-8 p-6 font-sans mt-6  rounded-2xl ">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="w-full  max-w-sm space-y-3">
              <p className="h-10 flex items-center justify-center bg-black text-white text-lg md:text-xl font-semibold  ">
                {findData.title}
              </p>
              {loading && (
                <div className="flex justify-center items-center h-[280px]">
                  <ImageLoader />
                </div>
              )}
              <img
                src={findData.thumbnail}
                alt={findData.title}
                onLoad={() => setLoading(false)} // hide loader after image load
                className={`w-full h-[280px] object-contain p-3 transition-opacity duration-500 ${
                  loading ? "opacity-0" : "opacity-100"
                }`}
              />
              <p className="h-8 flex items-center justify-center bg-black text-white px-2 py-1  text-sm md:text-base shadow-md font-medium">
                {Math.round(findData.discountPercentage)}% OFF
              </p>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="w-full md:w-1/2 space-y-5">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {findData.title}
              <span className="text-sm md:text-lg font-medium text-gray-500 ml-2">
                ({findData.tags?.[0]}, {findData.tags?.[1]})
              </span>
            </h1>

            {/* Price and Discount */}
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-2xl font-bold text-gray-800">
                ₹{findData.price}
              </span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                Save {Math.round(findData.discountPercentage)}%
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-base leading-relaxed">
              {findData.description}
            </p>

            {/* Shipping and Return info */}
            <div className="text-sm text-gray-600 space-y-1">
              <p>
                <span className="font-semibold">Shipping:</span>{" "}
                {findData.shippingInformation}
              </p>
              <p>
                <span className="font-semibold">Return Policy:</span>{" "}
                {findData.returnPolicy}
              </p>
            </div>

            {/* Stock check */}
            <div>
              {findData.stock > 0 ? (
                <p className="text-green-600 font-semibold">
                  ✅ In Stock: {findData.stock} items available
                </p>
              ) : (
                <p className="text-red-600 font-semibold">❌ Out of Stock</p>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <span className="font-semibold">Rating:</span>
              <p className="text-sm text-gray-700">{findData.rating} / 5</p>
            </div>

            {/* Add to Cart Section */}
            <div
              onClick={handleAddToCart}
              className="font-semibold w-full cursor-pointer bg-black hover:bg-gray-900 transform hover:scale-105 text-white  shadow-md py-3 text-center transition duration-300 ease-in-out"
            >
              {cartItem ? (
                // If product already in cart then show qty buttons
                <div className="flex items-center gap-3 justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(decreaseQty(productId));
                    }}
                    className="px-3 py-1 border rounded-md cursor-pointer hover:bg-gray-700"
                  >
                    -
                  </button>
                  <span className="px-3">{cartItem.qty}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(increaseQty({ id: productId }));
                    }}
                    className="px-3 py-1 border rounded-md cursor-pointer hover:bg-gray-700"
                  >
                    +
                  </button>
                </div>
              ) : (
                "ADD TO CART"
              )}
            </div>
          </div>
        </div>

        {/* Review Section */}
        <div className="w-[90%] md:w-[85%] mx-auto font-sans my-10">
          <h1 className="text-xl md:text-2xl font-semibold mb-6">
            ⭐ Customer Reviews
          </h1>

          {/* Show reviews if available */}
          <div className="space-y-4">
            {findData.reviews && findData.reviews.length > 0 ? (
              findData.reviews.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                    <h2 className="text-base md:text-lg font-medium text-gray-800">
                      {item.reviewerName}
                    </h2>
                    <span className="text-yellow-600 font-bold">
                      {item.rating} / 5
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm md:text-base mb-2">
                    {item.comment}
                  </p>
                  <div className="text-xs md:text-sm text-gray-500">
                    <p>Email: {item.reviewerEmail}</p>
                    <p>Date: {item.date}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600 italic">No reviews available.</p>
            )}
          </div>

          {/* Add comment button */}
          <div className="mt-6 text-center">
            <p className="text-base md:text-lg font-medium text-gray-800 mb-3">
              Want to share your experience?
            </p>
            <button
              onClick={() => nav("/addcomment/" + id)}
              className="bg-black cursor-pointer text-white font-semibold px-6 py-2 rounded-xl shadow-md hover:bg-gray-900 transform hover:scale-105 transition duration-300 text-sm md:text-base"
            >
              + Add a Comment
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ProductSinglePage;
