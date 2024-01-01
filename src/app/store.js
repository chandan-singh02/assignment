import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../features/userDetailsSlice";
import cartSlice from "../features/cartSlice";
export const store = configureStore({
  reducer: {
    app: userDetail,
    cart: cartSlice,
  },
});
