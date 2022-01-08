import React from "react";
import Header from "../Header/Header";

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => (
    <div className="layout">
        <Header />
        <div className="main-container">
            {children}
        </div>
    </div>
);

export default Layout;