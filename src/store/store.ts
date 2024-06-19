import { configureStore } from "@reduxjs/toolkit";
import { orderReducer } from "./OrderSlice";
import { menuReducer } from "./MenuSlice";
import { cartReducer } from "./CartSlice";
import { enableMapSet } from 'immer';

enableMapSet();

const store = configureStore({
    reducer: {
        order: orderReducer,
        menu: menuReducer,
        cart: cartReducer
    }
});

export default store;