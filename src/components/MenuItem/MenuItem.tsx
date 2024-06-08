import React from "react";
import { MenuItemProps } from "./MenuItem.types";
import { Button } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const MenuItem = (props: React.PropsWithChildren<MenuItemProps>) => {
  const countChangeHandler = (amount: number) => {
    props.onChange(props.count + amount);
  };

  return (
    <div className="d-flex justify-content-between my-2 shadow rounded-4 border w-100">
      <div className="d-flex" style={{ width: "calc(100% - 100px)" }}>
        <div className="me-2 d-flex align-items-center justify-content-center p-2" style={{ width: "150px" }}>
          <img src={props.item.imageUrl} width={"130px"} alt="Pizza" />
        </div>
        <div className="d-flex flex-column position-relative" style={{ width: "calc(100% - 150px)" }}>
          <div className="fw-bolder fs-5 w-100">
            <span>{props.item.name}</span>
          </div>
          <div className="w-100 d-flex">{props.item.description}</div>
          <div className="position-absolute d-flex end-0" style={{ top: "5px", fontSize: "12px" }}>
            {props.item.isRecommended && (
              <span className="px-2 me-2 rounded-pill bg-success-subtle d-flex align-items-center">
                <span className="me-1 text-success fw-bolder">&bull;</span>
                <span>recommended</span>
              </span>
            )}
            {props.item.mostOrdered && (
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
          {props.count > 0 ? (
            <div className="w-100 d-flex justify-content-between">
              <Button size="small" type="primary" icon={<MinusOutlined />} onClick={() => countChangeHandler(-1)} iconPosition="end" />
              <span className="px-2 text-center"> {props.count} </span>
              <Button size="small" type="primary" icon={<PlusOutlined />} onClick={() => countChangeHandler(1)} iconPosition="end" />
            </div>
          ) : (
            <Button type="primary" className="w-100" icon={<PlusOutlined />} onClick={() => countChangeHandler(1)} size="small" iconPosition="end">
              Try it
            </Button>
          )}
        </div>
        <div className="mt-2" style={{ fontSize: "12px" }}>
          <b>Price</b> : ${props.item.price}
        </div>
        <div className="mt-2" style={{ fontSize: "12px" }}>
          <b>Time</b> : {props.item.timeToPrepare} Min
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
