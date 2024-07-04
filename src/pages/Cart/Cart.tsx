import React, { useContext, useMemo } from "react";
import CartItem from "./CartItem/CartItem";
import { useSelector } from "react-redux";
import { CartItem as CartItemType } from "../../common/model/CartModel";
import { Button } from "antd";
import { RootContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems: Map<number, CartItemType> = useSelector((state: any) => state.cart.items);
  const items = useMemo(() => Array.from(cartItems.values()), [cartItems]);
  const rootContext = useContext(RootContext);
  const navigate = useNavigate();

  const placeOrder = (e: any) => {
    // Place Order
    rootContext.openNotificationWithIcon("success", "Order Placed Successfully", "Seat Back and Relax! Your Order is In Progress!");
    navigate("/order/" + 1);
  };

  return (
    <div>
      <div className="d-flex px-5 shadow-sm bg-dark-subtle align-items-center justify-content-between">
        <div className="fs-3 text-dark">Your Cart</div>
        <div className="position-relative">
          <Button className="d-flex align-items-center fs-6" type="primary" size="small" onClick={placeOrder}>
            Place Order
          </Button>
        </div>
      </div>
      <div className="px-5 py-2 overflow-y-auto overflow-x-hidden" style={{ height: "calc(100vh - 75px)" }}>
        {items.map((cartItem: CartItemType, index: number) => (
          <CartItem key={index} item={cartItem.item} count={cartItem.count} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
