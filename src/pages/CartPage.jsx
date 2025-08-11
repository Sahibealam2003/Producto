import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeItem, clearCart } from "../Utils/cartSlice";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const cart = useSelector((s) => s.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ If cart is empty, show message & back button
  if (!cart || cart.items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
        <p className="text-lg font-medium text-gray-600">
          Your cart is empty. Please go back and add items to your cart.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-200"
        >
          ← Back to Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      {cart.items.map((item) => (
        <div key={item.id} className="flex justify-between items-center border-b pb-3">
          <div className="flex items-center gap-3">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <p className="font-medium">{item.title}</p>
              <p className="text-gray-600">₹{item.price}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => dispatch(decreaseQty(item.id))}
              className="px-2 py-1 border rounded hover:bg-gray-100"
            >
              -
            </button>
            <span>{item.qty}</span>
            <button
              onClick={() => dispatch(increaseQty(item.id))}
              className="px-2 py-1 border rounded hover:bg-gray-100"
            >
              +
            </button>
            <button
              onClick={() => dispatch(removeItem(item.id))}
              className="ml-3 text-red-600 hover:underline"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="border-t pt-4">
        <p className="font-medium">Total items: {cart.totalQuantity}</p>
        <p className="font-medium">Total amount: ₹{cart.totalAmount}</p>
        <button
          onClick={() => dispatch(clearCart())}
          className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
