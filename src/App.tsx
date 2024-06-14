import React from "react";
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

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route path="/menu" element={<Menu />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
