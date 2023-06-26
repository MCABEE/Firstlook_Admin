import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import adminPostSlice from "./slices/adminPostSlice";

export default configureStore({
    reducer: {
        auth: authSlice,
        posts: adminPostSlice,
    },
})