import React from "react";
import Header from "../Header/Header";

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => (
    <div className="layout">
        <Header />
        <main className="main">
            {children}
        </main>
    </div>
);

export default Layout;