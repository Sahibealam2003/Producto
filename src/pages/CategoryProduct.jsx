import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

const CategoryProduct = ({ query }) => {
  const [catData, setCatData] = useState([]);
  const { text } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `https://dummyjson.com/products/category/${text}`
      );
      const categoryData = await res.json();
      setCatData(categoryData.products);
    }

    getData();
  }, [text]);

  const searchText = query.toLowerCase();
  const filteredData = catData.filter((item) =>
    item.title.toLowerCase().includes(searchText)
  );

  return (
    <>
      <div className="px-4 py-6 w-[90%] mx-auto">
        <h1 className="text-2xl font-bold mb-6 capitalize">{text} Products</h1>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredData &&
            filteredData.map((item) => (
              <div
                onClick={() => navigate(`/product/${item.id}`)}
                key={item.id}
                className="cursor-pointer transition transform duration-300 hover:scale-105 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100"
              >
                <div className="relative">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-48 object-fill rounded-t-2xl"
                  />

                  <p className="absolute top-2 left-3 bg-black text-white text-xs font-semibold px-2 py-1 rounded">
                    {Math.round(item.discountPercentage)}% OFF
                  </p>

                  <div className="absolute top-2 right-5 flex items-center gap-1 bg-black text-white px-2 py-1 rounded shadow-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle
                        cx="10"
                        cy="10"
                        r="9"
                        fill="url(#ratingGradient)"
                      />
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

                    <span className="text-xs font-semibold">{item.rating}</span>
                  </div>
                </div>

                <div className="p-4 flex items-center justify-between">
                  <h2 className="text-base font-semibold text-gray-800 truncate w-44">
                    {item.title}
                  </h2>
                  <p className="text-gray-500 font-semibold text-sm">
                    ₹{item.price}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CategoryProduct;
