import React from "react";
import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {
  return (
    <div>
      Hello Admin
      <Outlet />
    </div>
  );
};

export default LayoutAdmin;
