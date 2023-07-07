import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authorized: false,
        adminDetails: null,
    },
    reducers: {
        setAuthorized: (state, action) => {
            state.authorized = action.payload;
        },
        setAdminDetails: (state, action) => {
            state.adminDetails = action.payload;
        }
    }
})

export const { setAuthorized, setUnauthorized, setAdminDetails } = authSlice.actions;
export default authSlice.reducer;