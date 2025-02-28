import { configureStore } from "@reduxjs/toolkit";
import producReducer from "../features/product/productSlice";
import cartReducer from "../features/cart/cartSlice";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";

const stror = configureStore({
  reducer: {
    products: producReducer,
    cart: cartReducer,
    auth: authReducer,
    user: userReducer,
  },
});

export default stror;
