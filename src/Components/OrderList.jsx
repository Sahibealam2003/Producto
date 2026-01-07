import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../Utils/cartSlice";

const OrderList = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(
    (state) => state.cart
  );

  if (items.length === 0) {
    return (
      <div className="p-6 text-center text-lg font-semibold">
        🛒 No items in your order
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🛍️ Order List</h2>

      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center border p-4 rounded-lg shadow-sm"
          >
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p>Quantity: {item.qty}</p>
              <p>Price: ₹{item.price}</p>
              <p>Total: ₹{item.totalPrice}</p>
            </div>
          </li>
        ))}
      </ul>

    
      <div className="mt-6 p-4 border-t font-semibold text-lg">
        <p>Total Items: {totalQuantity}</p>
        <p>Total Amount: ₹{Math.round(totalAmount)}</p>

       
        <button
          onClick={() => {
            dispatch(clearCart());
            nav("/checkout");
          }}
          className="mt-4 cursor-pointer w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-600"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default OrderList;
