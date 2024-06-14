import React, { useEffect } from "react";
import { MenuProps } from "./Menu.types";
import MenuItem from "../../components/MenuItem/MenuItem";
import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { BaseService } from "../../Services/BaseService";
import { API_CONSTANT } from "../../common/constants/ApiConstants";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCount } from "../../store/OrderSlice";

const Menu = (props: React.PropsWithChildren<MenuProps>) => {
  const count = useSelector((state: any) => state.order.count);
  const dispatch = useDispatch();

  const setItemCount = (count: number) => {
    dispatch(setCount(count));
  };

  const item = {
    id: 123,
    name: "Mix Veg Pizza (Garnished with Coriander)",
    description: "This pizza is very nice",
    price: 12.5,
    discount: 0,
    isRecommended: true,
    imageUrl: "/pizza.png",
    isAvailable: true,
    timeToPrepare: 15,
    mostOrdered: true,
    veg: true,
    containsEgg: true,
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await BaseService.sendGetRequest(API_CONSTANT.FAKE_URL);
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
            5
          </span>
        </div>
      </div>
      <div className="px-5 py-2 overflow-y-auto overflow-x-hidden" style={{ height: "calc(100vh - 75px)" }}>
        <MenuItem item={item} key={1} count={count} onChange={(count: number) => setItemCount(count)} />
        <MenuItem item={item} key={2} count={count} onChange={(count: number) => setItemCount(count)} />
        <MenuItem item={item} key={3} count={count} onChange={(count: number) => setItemCount(count)} />
        <MenuItem item={item} key={4} count={count} onChange={(count: number) => setItemCount(count)} />
        <MenuItem item={item} key={5} count={count} onChange={(count: number) => setItemCount(count)} />
        <MenuItem item={item} key={6} count={count} onChange={(count: number) => setItemCount(count)} />
        <MenuItem item={item} key={7} count={count} onChange={(count: number) => setItemCount(count)} />
        <MenuItem item={item} key={8} count={count} onChange={(count: number) => setItemCount(count)} />
      </div>
    </div>
  );
};

export default Menu;
