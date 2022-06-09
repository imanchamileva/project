import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: "",
    isLogin: false
}

export const loginSlice = createSlice({
    //state
    initialState: initialState,
    name: 'user',
    //reducers
    reducers: {
        //actions
        //state holds the info about the current and previous value of the state
        // action is an obj which contains a payload and type, payload:obj that u may pass  in information that u may wanna use when changing the state(+/- arg in a funct u use to change info)
        login: (state) => {
            // to change user, we change value with what we get from payload
            state.isLogin = true;

        },
        logout: (state) => {
            state.isLogin = false;
        },
        setUserName(state, action) {
            state.userName = action.payload;
        }
    }
})

export const { login, logout, setUserName } = loginSlice.actions
export default loginSlice.reducer;
