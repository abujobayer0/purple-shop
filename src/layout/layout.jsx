import React from "react";
import { NavBar } from "../components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Outlet />
    </React.Fragment>
  );
};

export default Layout;
