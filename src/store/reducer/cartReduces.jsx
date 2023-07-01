import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id } = action.payload;
      const { quantity } = action.payload;
      const existingProduct = state.items.find((item) => item.id === id);

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.items.push({ ...action.payload, quantity: quantity });
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeItem: (state, action) => {
      const { id } = action.payload;
      localStorage.setItem("cart", JSON.stringify(state.items));

      const existingProduct = state.items.find((item) => item.id === id);

      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          console.log(
            "state.items.filter((item) => item.id !== id)",
            state.items.filter((item) => item.id !== id)
          );
          return state.items.filter((item) => item.id !== id);
        } else {
          existingProduct.quantity -= 1;
        }
      }
    },


    
    addItemProduct: (state, action) => {
      const { id } = action.payload;
      localStorage.setItem("cart", JSON.stringify(state.items));
      const quentityProduct = state.items.find((item) => item.id == id);
      if (quentityProduct) {
        quentityProduct.quantity += 1;
      }
    },

    clearCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.filter((item) => item.id !== id);
      console.log(existingItem.quantity);
      return existingItem;
    },
  },
});

export const { addItem, removeItem, clearCart, addItemProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
