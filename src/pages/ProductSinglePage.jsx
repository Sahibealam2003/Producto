import React from "react";
import { useApi } from "../Utils/ApiContex";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import NoProductMessage from "../Components/NoProductMessage";

const ProductSinglePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { apiData } = useApi();

  console.log(apiData);

 
  const findData = apiData.find((item) => item.id == id);

  if (!apiData || apiData.length === 0) {
    return (
      <div className="flex justify-center items-center mt-[15%]">
        <p className="text-gray-600 text-lg animate-pulse">Loading product...</p>
      </div>
    );
  }

  // 2. If product not found, show NoProductMessage
  if (!findData) {
    return <NoProductMessage />;
  }


  return (
    <>
    
    <div>
      <div className="w-[85%] justify-center items-center mx-auto  flex p-5  font-sans">
        <div className="w-[50%] md:w-1/2">
          <div className="">
            <p className="h-10  w-[350px] bg-black text-white text-xl px-2 py-1 shadow-md">
              {findData.title}
            </p>
            <img
              src={findData.thumbnail}
              alt={findData.title}
              className="rounded-t-2xl-2xl ml-6.5 w-[300px]  h-[250px]  shadow-md"
            />
            <p className="h-8 w-[350px] bg-black text-white px-2 py-1 shadow-md">
              {Math.round(findData.discountPercentage)}% OFF
            </p>
          </div>
        </div>

        {/* For description */}
        <div className="w-[50%] space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">
            {findData.title}
            <span className="text-base  font-normal text-gray-600 ml-2">
              ({findData.tags?.[0]}, {findData.tags?.[1]})
            </span>
          </h1>

          <div className="flex items-center gap-4">
            <span className="text-xl font-semibold text-gray-500">
              ₹{findData.price}
            </span>
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
              {Math.round(findData.discountPercentage)}% OFF
            </span>
          </div>

          <p className="text-gray-700">{findData.description}</p>

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

          <div className="text-sm">
            {findData.stock > 0 ? (
              <p className="text-green-600 font-medium">
                ✅ In Stock: {findData.stock} items available
              </p>
            ) : (
              <p className="text-red-600 font-medium">❌ Out of Stock</p>
            )}
          </div>
          <div className="flex items-center gap-0.5">
            <span className="font-semibold">Rating:</span>
            <svg
              width="18"
              height="18"
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
                fill="white"
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
                  <stop stopColor="black" />
                  <stop offset="1" stopColor="black" />
                </linearGradient>
              </defs>
            </svg>
            <p className="text-sm text-gray-700">{findData.rating} / 5</p>
          </div>
          <button
            onClick={() => navigate("/product/cart")}
            className="font-semibold w-[100%] cursor-pointer bg-black  transform hover:scale-105 text-white shadow-md py-2 transition duration-300 ease-in-out"
          >
            ADD TO CART
          </button>
        </div>
      </div>

      {/* Review */}

      <div className="w-[85%] mx-auto font-sans my-10">
        <h1 className="text-2xl font-semibold mb-4">Customer Review Summary</h1>

        <div className="space-y-4">
          {findData.reviews && findData.reviews.length > 0 ? (
            findData.reviews.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md "
              >
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-medium">{item.reviewerName}</h2>
                  <div className="flex items-center gap-0.5">
                  <span className="text-black font-bold">
                    {item.rating}/5 
                  </span>
                  <svg
              width="18"
              height="18"
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
                fill="white"
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
                  <stop stopColor="black" />
                  <stop offset="1" stopColor="black" />
                </linearGradient>
              </defs>
            </svg>
                  </div>
                </div>

                <p className="text-gray-700 mb-2">{item.comment}</p>

                <div className="text-sm text-gray-500">
                  <p>Email: {item.reviewerEmail}</p>
                  <p>Date: {item.date}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No reviews available.</p>
          )}
        </div>

        
        <div className="mt-6 text-center">
          <p className="text-lg font-medium text-gray-800 mb-2">
            Want to share your experience?
          </p>
          <button className="bg-black text-white font-semibold px-6 py-2 rounded shadow-md hover:bg-gray-800 transform hover:scale-105 transition duration-300">
            Click here to add a comment
          </button>
        </div>
      </div>

      <Footer />
    </div> 
    </>
  );
};

export default ProductSinglePage;
