import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { value: { name: "" } }

export const loginSlice = createSlice({
    //state
    initialState: { value: initialStateValue },
    name: 'user',
    //reducers
    reducers: {
        //actions
        //state holds the info about the current and previous value of the state
        // action is an obj which contains a payload and type, payload:obj that u may pass  in information that u may wanna use when changing the state(+/- arg in a funct u use to change info)
        login: (state, action) => {
            // to change user, we change value with what we get from payload
            state.value = action.payload;

        },
        logout: (state) => {
            state.value = initialStateValue;
        }
    }
})

export const { login, logout } = loginSlice.actions
export default loginSlice.reducer;
