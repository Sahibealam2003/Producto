import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],       
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload; // { id, title, price, thumbnail }
      const price = Number(newItem.price) || 0;
      const existing = state.items.find(i => i.id === newItem.id);

      if (!existing) {
        state.items.push({ ...newItem, qty: 1, totalPrice: price });
      } else {
        existing.qty += 1;
        existing.totalPrice = existing.qty * existing.price;
      }

      state.totalQuantity = state.items.reduce((s, i) => s + i.qty, 0);
      state.totalAmount = state.items.reduce((s, i) => s + (i.totalPrice || 0), 0);
    },

    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(i => i.id !== id);
      state.totalQuantity = state.items.reduce((s, i) => s + i.qty, 0);
      state.totalAmount = state.items.reduce((s, i) => s + (i.totalPrice || 0), 0);
    },

    increaseQty: (state, action) => {
      const id = action.payload;
      const it = state.items.find(i => i.id === id);
      if (!it) return;
      it.qty += 1;
      it.totalPrice = it.qty * it.price;
      state.totalQuantity = state.items.reduce((s, i) => s + i.qty, 0);
      state.totalAmount = state.items.reduce((s, i) => s + (i.totalPrice || 0), 0);
    },

    decreaseQty: (state, action) => {
      const id = action.payload;
      const it = state.items.find(i => i.id === id);
      if (!it) return;
      it.qty -= 1;
      if (it.qty <= 0) {
        state.items = state.items.filter(i => i.id !== id);
      } else {
        it.totalPrice = it.qty * it.price;
      }
      state.totalQuantity = state.items.reduce((s, i) => s + i.qty, 0);
      state.totalAmount = state.items.reduce((s, i) => s + (i.totalPrice || 0), 0);
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },

   
  }
});

export const { addItem, removeItem, increaseQty, decreaseQty, clearCart, setCart } = cartSlice.actions;
export default cartSlice.reducer;
