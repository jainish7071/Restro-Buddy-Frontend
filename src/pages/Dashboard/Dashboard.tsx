import React from "react";
import { DashboardProps } from "./Dashboard.types";
import Menu from "../Menu/Menu";

const Dashboard = (props: React.PropsWithChildren<DashboardProps>) => {
  return (
    <>
      <Menu />
    </>
  );
};

export default Dashboard;
