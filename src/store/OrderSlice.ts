import { createSlice } from "@reduxjs/toolkit"

const orderSlice = createSlice({
    name: "order",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        setCount: (state, value) => {
            state.count = value.payload;
        }
    }
})

export const { increment, decrement, setCount } = orderSlice.actions;

export const orderReducer = orderSlice.reducer;