import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
// import plantsReducer from "./plantsSlice"; // Uncomment when plantsSlice.js is accessible

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // plants: plantsReducer, // Uncomment when plantsSlice.js is accessible
  },
});
