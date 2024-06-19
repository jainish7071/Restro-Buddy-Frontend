import React, { useContext, useEffect } from "react";
import { MenuProps } from "./Menu.types";
import MenuItem from "../../components/MenuItem/MenuItem";
import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { BaseService } from "../../Services/BaseService";
import { API_CONSTANT } from "../../common/constants/ApiConstants";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../store/MenuSlice";
import { RootContext } from "../../App";

const Menu = (props: React.PropsWithChildren<MenuProps>) => {
  const count = useSelector((state: any) => state.cart.itemCount);
  const menuItems = useSelector((state: any) => state.menu.items);
  const dispatch = useDispatch();

  const context = useContext(RootContext);

  const item = {
    active: true,
    available: true,
    description: "Description 2",
    discount: 10,
    id: 2,
    imageUrl: "image_url",
    itemType: "CONTAINS_EGG",
    name: "Burger",
    price: 20,
    recommended: false,
    timeToPrepare: 10,
  };

  const itemList = [
    {
      id: 2,
      name: "Burger",
      description: "Description 2",
      price: 20,
      discount: 10,
      imageUrl: "image_url",
      timeToPrepare: 10,
      itemType: "CONTAINS_EGG",
      active: true,
      available: true,
      recommended: false,
    },
    {
      id: 3,
      name: "Pizza",
      description: "Description 1",
      price: 15,
      discount: 0,
      imageUrl: "image_url_pizza",
      timeToPrepare: 15,
      itemType: "CONTAINS_EGG",
      active: true,
      available: true,
      recommended: true,
    },
    {
      id: 4,
      name: "Sandwich",
      description: "Description 3",
      price: 10,
      discount: 0,
      imageUrl: "image_url_sandwich",
      timeToPrepare: 8,
      itemType: "VEG",
      active: true,
      available: false,
      recommended: false,
    },
  ];

  const cartItem = {
    item: item,
    count: 0,
  };

  const cart = {
    itemId: cartItem,
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    const data = await BaseService.sendGetRequest(API_CONSTANT.FETCH_MENU);
    dispatch(setItems(data));
    context.openNotificationWithIcon("success", "Fetched Successfully", " Got the Entire Data");
  };

  return (
    <div>
      <div className="d-flex px-5 shadow-sm bg-dark-subtle align-items-center justify-content-between">
        <div className="fs-3 text-dark">Menu</div>
        <div className="position-relative">
          <Button className="d-flex align-items-center fs-6" type="primary" size="small" icon={<ShoppingCartOutlined className="fs-5 m-0 p-0" />} iconPosition="start">
            <Link to={"/cart"} className="border-none text-decoration-none">
              Cart
            </Link>
          </Button>
          <span className="position-absolute bg-danger text-light text-center rounded-5" style={{ width: "14px", height: "14px", fontSize: "10px", right: "-5px", top: "-5px", lineHeight: "14px" }}>
            {count}
          </span>
        </div>
      </div>
      <div className="px-5 py-2 overflow-y-auto overflow-x-hidden" style={{ height: "calc(100vh - 75px)" }}>
        {itemList.map((item: any) => {
          return <MenuItem item={item} count={count} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Menu;
