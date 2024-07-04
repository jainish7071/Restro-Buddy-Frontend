import { MenuItem } from '../common/model/MenuItemModel';
import { CartItem } from './../common/model/CartModel';
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartState {
    items: Map<number, CartItem>,
    totalPrice: number,
    itemCount: number
}
const initialState: CartState = {
    items: new Map(),
    totalPrice: 0,
    itemCount: 0
}

const CartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addItem: (state, action: PayloadAction<MenuItem>) => {
            const item: MenuItem = action.payload;
            const newState = { ...state };
            const existingItem = newState.items.get(item.id);
            if (existingItem)
                newState.items.set(item.id, new CartItem(item, existingItem.count + 1));
            else
                newState.items.set(item.id, new CartItem(item, 1));
            newState.itemCount += 1;
            newState.totalPrice += item.price;
            state.items = newState.items;
            state.itemCount = newState.itemCount;
            state.totalPrice = newState.totalPrice;
        },
        removeItem: (state, action: PayloadAction<MenuItem>) => {
            const item: MenuItem = action.payload;
            const newState = { ...state };
            const existingItem = newState.items.get(item.id);
            if (existingItem && existingItem.count > 0) {
                if (existingItem.count > 1)
                    newState.items.set(item.id, new CartItem(item, existingItem.count - 1));
                else
                    newState.items.delete(item.id);

                newState.itemCount -= 1;
                newState.totalPrice -= item.price;
            }
            state.items = newState.items;
            state.itemCount = newState.itemCount;
            state.totalPrice = newState.totalPrice;
        }
    }
})

export const { addItem, removeItem } = CartSlice.actions;
export const cartReducer = CartSlice.reducer;