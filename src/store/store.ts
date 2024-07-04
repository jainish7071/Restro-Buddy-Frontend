import { configureStore } from "@reduxjs/toolkit";
import { menuReducer } from "./MenuSlice";
import { cartReducer } from "./CartSlice";
import { enableMapSet } from 'immer';

enableMapSet();

const store = configureStore({
    reducer: {
        menu: menuReducer,
        cart: cartReducer
    }
});

export default store;