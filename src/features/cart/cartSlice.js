import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [
    {
      id: "",
      totalQuatity: 0,
      totalPrice: 0,
    },
  ],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id, totalQuatity, totalPrice } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.totalQuatity++;
        existingItem.totalPrice += totalPrice;
      } else {
        state.items.push({
          id: id,
          totalQuatity: totalQuatity,
          totalPrice: totalPrice,
        });
      }
    },
    increaseItemQuantity: (state, action) => {
      const { id, price } = action.payload;
      const itemPrice = price;
      const existingItemIncrease = state.items.find((item) => item.id === id);
      if (existingItemIncrease) {
        existingItemIncrease.totalQuatity += 1;
        existingItemIncrease.totalPrice =
          existingItemIncrease.totalQuatity * itemPrice;
      }
    },
    decreaseItemQuantity: (state, action) => {
      const { id, price } = action.payload;
      const itemPrice = price;
      const existingItemIncrease = state.items.find((item) => item.id === id);
      if (existingItemIncrease) {
        existingItemIncrease.totalQuatity -= 1;
        existingItemIncrease.totalPrice =
          existingItemIncrease.totalQuatity * itemPrice;
      }
    },
    itemDelete: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});
export const {
  addItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  itemDelete,
} = cartSlice.actions;
export default cartSlice.reducer;
