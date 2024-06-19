import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: "menu",
    initialState: {
        items: []
    },
    reducers: {
        setItems: (state, value) => {
            state.items = value.payload;
        }
    }
})

export const { setItems } = menuSlice.actions;
export const menuReducer = menuSlice.reducer;