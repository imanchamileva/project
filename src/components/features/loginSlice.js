import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isAuthenticated: false,
    user: null
}

export const loginSlice = createSlice({
    //state
    initialState,
    name: 'user',
    //reducers
    reducers: {
        //actions
        login: (state) => {
            state.user = state.user;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        }
    }
})


export default loginSlice.reducer;

// destructuring
export const { login, logout } = loginSlice.actions;

export const selectUser = (state) => state.user.isAuthenticated