import React from "react";
import { MenuItemProps } from "./MenuItem.types";
import { Button } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../store/CartSlice";

const MenuItem = (props: React.PropsWithChildren<MenuItemProps>) => {
  const { id, name, description, price, discount, recommended, imageUrl, available, timeToPrepare, mostOrdered, itemType }: any = props.item;
  const cartItems = useSelector((state: any) => state.cart.items);
  const count = cartItems.get(id) ? cartItems.get(id).count : 0;

  const dispatch = useDispatch();
  const countChangeHandler = (action: "add" | "remove") => {
    if (action === "add") {
      dispatch(addItem(props.item));
    } else {
      dispatch(removeItem(props.item));
    }
  };

  return (
    <div className="d-flex justify-content-between my-2 shadow-sm rounded-4 border w-100">
      <div className="d-flex" style={{ width: "calc(100% - 100px)" }}>
        <div className="me-2 d-flex align-items-center justify-content-center p-2" style={{ width: "150px" }}>
          <img src={"/pizza.png"} width={"130px"} alt="Pizza" />
        </div>
        <div className="d-flex flex-column position-relative" style={{ width: "calc(100% - 150px)" }}>
          <div className="fw-bolder fs-5 w-100">
            <span>{name}</span>
          </div>
          <div className="w-100 d-flex">{description}</div>
          <div className="position-absolute d-flex end-0" style={{ top: "5px", fontSize: "12px" }}>
            {recommended && (
              <span className="px-2 me-2 rounded-pill bg-success-subtle d-flex align-items-center">
                <span className="me-1 text-success fw-bolder">&bull;</span>
                <span>recommended</span>
              </span>
            )}
            {mostOrdered && (
              <span className="px-2 me-2 rounded-pill bg-success-subtle d-flex align-items-center">
                <span className="me-1 text-danger fw-bolder">&bull;</span>
                <span>most ordered</span>
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="p-2 px-3" style={{ width: "150px" }}>
        <div className="d-flex justify-content-evenly">
          {count > 0 ? (
            <div className="w-100 d-flex justify-content-between">
              <Button size="small" type="primary" icon={<MinusOutlined />} onClick={() => countChangeHandler("remove")} iconPosition="end" />
              <span className="px-2 text-center"> {count} </span>
              <Button size="small" type="primary" icon={<PlusOutlined />} onClick={() => countChangeHandler("add")} iconPosition="end" />
            </div>
          ) : (
            <Button type="primary" className="w-100" icon={<PlusOutlined />} onClick={() => countChangeHandler("add")} size="small" iconPosition="end">
              Try it
            </Button>
          )}
        </div>
        <div className="mt-2" style={{ fontSize: "12px" }}>
          <b>Price</b> :
          {discount && discount > 0 ? (
            <span className="ms-1">
              <s>${price}</s> ${price - price / discount}
              <span style={{ fontSize: "10px", marginLeft: "2px" }}>{discount}% Off</span>
            </span>
          ) : (
            <span className="ms-1">${price}</span>
          )}
        </div>
        <div className="mt-2" style={{ fontSize: "12px" }}>
          <b>Estimated Time</b> : {timeToPrepare} Min
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
