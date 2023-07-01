import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './reducer/cartReduces.jsx'

const store = configureStore({
  reducer: {
    cart: cartSlice,
  }
});
export default store;
