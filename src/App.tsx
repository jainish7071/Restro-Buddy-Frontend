import React, { createContext } from "react";
import AppLayout from "./pages/AppLayout/AppLayout";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./assets/styles/index.scss";
import Dashboard from "./pages/Dashboard/Dashboard";
import "bootstrap/scss/bootstrap.scss";
import Menu from "./pages/Menu/Menu";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Cart from "./pages/Cart/Cart";
import { Provider } from "react-redux";
import store from "./store/store";
import { notification } from "antd";
import OrderView from "./pages/OrderView/OrderView";
import LoginPage from "./pages/Login/LoginPage";
import SignUpPage from "./pages/SignUp/SignUpPage";

type NotificationType = "success" | "info" | "warning" | "error";
export const RootContext = createContext({ openNotificationWithIcon: (type: NotificationType, title: String, message: String) => {} });
const App = () => {
  const [api, contextHolder]: any = notification.useNotification();
  const openNotificationWithIcon = (type: NotificationType, title: String, message: String) => {
    api[type]({
      message: title,
      description: message,
      duration: 2,
    });
  };

  return (
    <>
      {contextHolder}
      <RootContext.Provider value={{ openNotificationWithIcon }}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="" element={<AppLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/order/:orderId" element={<OrderView />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </RootContext.Provider>
    </>
  );
};

export default App;
