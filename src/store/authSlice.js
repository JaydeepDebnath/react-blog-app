import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData : null,
    userPost : null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login : (state,action) =>{
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout :( state) => {
            state.status = false;
            state.userData = null;
        },
        post : (state,action) => {
            state.allpost = true;
            state.userPost = action.payload.userPost;
        }
    }
})

export const {login,logout,post } = authSlice.actions;

export default authSlice.reducer;