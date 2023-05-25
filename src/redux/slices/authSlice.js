import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authorized: false,
        role: '',
    },
    reducers: {
        setAuthorized: (state) => {
            state.authorized = true;
        },
        setUnauthorized: (state) => {
            state.authorized = false;
        },
        setRole: (state, action) => {
            state.role = action.payload;
        }
    }
})

export const { setAuthorized, setUnauthorized, setRole } = authSlice.actions;
export default authSlice.reducer;