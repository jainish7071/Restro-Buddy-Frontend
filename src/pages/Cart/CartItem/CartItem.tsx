import React from "react";
import { CartItemProps } from "./CartItem.types";
import MenuItem from "../../../components/MenuItem/MenuItem";

const CartItem = (props: React.PropsWithChildren<CartItemProps>) => {
  return (
    <div>
      <MenuItem count={props.count} item={props.item} key={props.item.id} />
    </div>
  );
};

export default CartItem;
