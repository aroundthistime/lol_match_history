import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = (): JSX.Element => (
    <div className="layout">
        <Header />
        <Outlet />
    </div>
);

export default Layout;