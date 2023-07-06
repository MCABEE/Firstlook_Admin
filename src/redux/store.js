import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import adminPostSlice from "./slices/adminPostSlice";
import paymentPlanSlice from "./slices/paymentPlanSlice";

export default configureStore({
    reducer: {
        auth: authSlice,
        posts: adminPostSlice,
        paymentPlans: paymentPlanSlice,
    },
})