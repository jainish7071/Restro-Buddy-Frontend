import React from "react";
import AppLayout from "./pages/AppLayout/AppLayout";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./assets/styles/index.scss";
import Dashboard from "./pages/Dashboard/Dashboard";
import "bootstrap/scss/bootstrap.scss";
import Menu from "./pages/Menu/Menu";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/menu" element={<Menu />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
