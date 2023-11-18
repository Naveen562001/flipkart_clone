import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      const existingItemIndex = state.findIndex((x) => x.id === product.id);
      if (existingItemIndex !== -1) {
        // Increase quantity
        state[existingItemIndex].qty += 1;
        state[existingItemIndex].price +=state[existingItemIndex].price;
      } else {
        // Add new item
        state.push({ ...product, qty: 1 });
      }
    },
    delItem: (state, action) => {
      const product = action.payload;
      const existingItemIndex = state.findIndex((x) => x.id === product.id);
      if (existingItemIndex !== -1 && state[existingItemIndex].qty === 1) {
        // Remove item if quantity is 1
        state.splice(existingItemIndex, 1);
      } else if (existingItemIndex !== -1) {
        // Decrease quantity
        state[existingItemIndex].qty -= 1;
      }
    },
    ///
  },
});

export const { addItem, delItem, AllItem } = cartSlice.actions;

export default cartSlice.reducer;
