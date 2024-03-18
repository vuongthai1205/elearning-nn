
import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
export const UserReducer = createSlice({
    name: "account",
    initialState,
    reducers: {
        login: (state, action) => {
            state = action.payload;
            console.log(123);
            return state;
        },
        logout: () => {
            return initialState;
        },
    },
});
export const { login, logout } = UserReducer.actions;
export default UserReducer.reducer;



