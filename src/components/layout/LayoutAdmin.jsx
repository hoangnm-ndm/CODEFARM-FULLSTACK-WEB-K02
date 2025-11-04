import { Outlet } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin";

const LayoutAdmin = () => {
  return (
    <div>
      <h1>Hello Admin</h1>
      <HeaderAdmin />
      <Outlet />
    </div>
  );
};

export default LayoutAdmin;
