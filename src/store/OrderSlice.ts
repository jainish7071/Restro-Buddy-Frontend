import { createSlice } from "@reduxjs/toolkit"

const orderSlice = createSlice({
    name: "order",
    initialState: {
        count: 0
    },
    reducers: {
        setCount: (state, value) => {
            state.count = value.payload;
        }
    }
})

export const { setCount } = orderSlice.actions;

export const orderReducer = orderSlice.reducer;