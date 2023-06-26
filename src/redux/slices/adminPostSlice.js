import { createSlice } from "@reduxjs/toolkit";

export const adminPostSclice = createSlice({
    name: 'posts',
    initialState: {
        adminPosts: [],
        selectedPost: {},
        update: false,
    },
    reducers: {
        setAdminPosts: (state, action) => {
            state.adminPosts = action.payload;
        },
        setSelectedPost: (state, action) => {
            state.selectedPost = action.payload;
        },
        setPostUpdate: (state, action) => {
            state.update = action.payload;
        }
    }
})

export const { setAdminPosts, setSelectedPost, setPostUpdate } = adminPostSclice.actions;
export default adminPostSclice.reducer;