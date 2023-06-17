import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authorized: false,
        adminDetails: {
            id: '',
            isMaster: false
        }
    },
    reducers: {
        setAuthorized: (state) => {
            state.authorized = true;
        },
        setUnauthorized: (state) => {
            state.authorized = false;
        },
        setAdminDetails: (state, action) => {
            state.adminDetails = action.payload;
        }
    }
})

export const { setAuthorized, setUnauthorized, setAdminDetails } = authSlice.actions;
export default authSlice.reducer;