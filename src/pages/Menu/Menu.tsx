import React, { useEffect } from "react";
import { MenuProps } from "./Menu.types";
import MenuItem from "../../components/MenuItem/MenuItem";
import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../store/MenuSlice";
import { MenuService } from "../../Services/MenuService";

const Menu = (props: React.PropsWithChildren<MenuProps>) => {
  const count = useSelector((state: any) => state.cart.itemCount);
  const menuItems = useSelector((state: any) => state.menu.items);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    try {
      const data = await MenuService.fetchMenu();
      dispatch(setItems(data));
    } catch (error) {
      console.error(error);
    }
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
        {menuItems &&
          menuItems.map((item: any) => {
            return <MenuItem item={item} count={count} key={item.id} />;
          })}
      </div>
    </div>
  );
};

export default Menu;
