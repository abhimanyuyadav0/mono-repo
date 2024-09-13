import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  totalItems: 0, 
  totalPrice: 0, 
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item._id === newItem._id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push(newItem);
      }
      state.totalFollowers += 1; // Corrected to use the increment operator +=
    },
    removeItemFromCart(state, action) {
      const productIdToRemove = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item._id === productIdToRemove
      );

      if (existingItemIndex !== -1) {
        state.items.splice(existingItemIndex, 1);
        state.totalFollowers -= 1; // Corrected to use the decrement operator -=
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalFollowers = 0;
    },
  },
});

function getProductPrice(productId) {
  return 1;
}

export const { addItemToCart, removeItemFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
