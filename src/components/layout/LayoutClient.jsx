import { Outlet } from "react-router-dom";
import HeaderClient from "./HeaderClient";

const LayoutClient = () => {
  return (
    <div>
      <HeaderClient />
      <Outlet />
    </div>
  );
};

export default LayoutClient;
