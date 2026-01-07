import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeItem, clearCart } from "../Utils/cartSlice";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const cart = useSelector((s) => s.cart); 
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 



  if (!cart || cart.items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
        <p className="text-lg font-medium text-gray-600">
          Your cart is empty. Please go back and add items to your cart.
        </p>
        <button
          onClick={() => navigate(`/`)}
          className="bg-black cursor-pointer text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-200"
        >
          ← Back to Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="w-[95%] md:w-[85%] lg:w-[70%] mx-auto py-8 space-y-6 font-sans">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        Your Shopping Cart
      </h1>

      
      <div className="space-y-4">
        {cart.items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row justify-between items-center gap-4 border rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-20 h-20 object-contain rounded-lg border bg-white"
              />
              <div className="flex flex-col">
                <p className="font-semibold text-gray-800 text-base md:text-lg">
                  {item.title}
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                  ₹{item.price}
                </p>
              </div>
            </div>

            
            <div className="flex items-center gap-2">
              <button
                onClick={() => dispatch(decreaseQty({ id: Number(item.id) }))}
                className="px-3 cursor-pointer py-1 border rounded-md hover:bg-gray-100 text-lg font-bold"
              >
                -
              </button>
              <span className="px-2 font-medium">{item.qty}</span>
              <button
                onClick={() => dispatch(increaseQty({ id: Number(item.id) }))}
                className="px-3 cursor-pointer py-1 border rounded-md hover:bg-gray-100 text-lg font-bold"
              >
                +
              </button>
              <button
                onClick={() => dispatch(removeItem(Number(item.id)))}
                className="ml-3 cursor-pointer text-red-600 hover:underline text-sm md:text-base"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      
      <div className="border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="space-y-1">
          <p className="font-semibold text-gray-800 text-base md:text-lg">
            Total items: <span className="text-gray-600">{cart.totalQuantity}</span>
          </p>
          <p className="font-semibold text-gray-800 text-base md:text-lg">
            Total amount: <span className="text-green-600">₹{Math.round(cart.totalAmount)}</span>
          </p>
        </div>

        
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => dispatch(clearCart())}
            className="bg-red-600 cursor-pointer text-white px-5 py-2 rounded hover:bg-red-700 transition duration-200 shadow-md text-sm md:text-base"
          >
            Clear Cart
          </button>
          <button
          
            onClick={() => {
              navigate("/checkout")
              dispatch(clearCart())
            }}
            className="bg-black cursor-pointer text-white px-5 py-2 rounded hover:bg-gray-900 transition duration-200 shadow-md text-sm md:text-base"
          >
            Proceed to Checkout →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
