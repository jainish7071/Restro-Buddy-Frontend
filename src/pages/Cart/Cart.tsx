import React, { useMemo } from "react";
import CartItem from "./CartItem/CartItem";
import { useSelector } from "react-redux";
import { CartItem as CartItemType } from "../../common/model/CartModel";

const Cart = () => {
  const cartItems: Map<number, CartItemType> = useSelector((state: any) => state.cart.items);

  const items = useMemo<CartItemType[]>(() => {
    const itemArray: CartItemType[] = [];
    cartItems.forEach((value, key) => {
      itemArray.push(value);
    });
    return itemArray;
  }, [cartItems]);

  return (
    <>
      {items.map((cartItem: CartItemType) => (
        <CartItem key={cartItem.item.id} item={cartItem.item} count={cartItem.count} />
      ))}
    </>
  );
};

export default Cart;
