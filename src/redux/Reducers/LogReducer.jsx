import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    open: false,
    ContentComponent: <p>Default Content</p>,
    onOkay: (e) => {
        alert("ok redux");
    },
};

const LogReducer = createSlice({
    name: 'LogReducer',
    initialState,
    reducers: {
        handleDrawerAction: (state, action) => {
            state.open = action.payload;
        },
        updateContentDrawerAction: (state, action) => {
            state.open = true;
            state.ContentComponent = action.payload;
        },
        updateOnOkayAction: (state, action) => {
            state.onOkay = action.payload;
        },
    },
});

export const {
    handleDrawerAction,
    updateContentDrawerAction,
    updateOnOkayAction,
} = LogReducer.actions;

export default LogReducer.reducer;
