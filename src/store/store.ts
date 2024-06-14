import { configureStore } from "@reduxjs/toolkit";
import { orderReducer } from "./OrderSlice";

// one reducer
const store = configureStore({
    reducer: {
        order: orderReducer
    }
});

export default store;