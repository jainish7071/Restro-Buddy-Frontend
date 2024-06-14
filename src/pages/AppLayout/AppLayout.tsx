import React, { useEffect, useState } from "react";
import "./AppLayout.scss";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import ListIcon from "@mui/icons-material/List";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const AppLayout: React.FC = () => {
  const [sideBarExpanded, setSideBarExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setSideBarExpanded(false);
  }, [location]);

  const menuItem = [
    { id: "item1", value: "Menu", path: "/menu" },
    { id: "item2", value: "Cart", path: "/cart" },
    { id: "item3", value: "Order History", path: "/order-history" },
    { id: "item4", value: "Profile", path: "/profile" },
    { id: "item5", value: "Login", path: "/login" },
  ];

  return (
    <div>
      <div className="top-bar">
        {sideBarExpanded ? <ClearAllIcon color="primary" onClick={() => setSideBarExpanded(false)} className="menu-icon opened" /> : <ListIcon color="primary" onClick={() => setSideBarExpanded(true)} className="menu-icon" />}
        <div className="ms-3">
          <img src="/logo192.png" width={"30px"} height={"30px"} alt="Restro Buddy" />
          <span className="ms-2 fw-bolder text-white">Resto Buddy</span>
        </div>
      </div>
      <div className="layout-container">
        <div className="side-bar">
          {menuItem.map((item: any, index: number) => {
            return (
              <NavLink to={item.path} key={index} className={sideBarExpanded ? "item-menu show" : "item-menu"} style={{ transitionDelay: index * 0.1 + "s" }}>
                {item.value}
              </NavLink>
            );
          })}
        </div>
        <div className="main-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
