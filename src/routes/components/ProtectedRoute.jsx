import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user") || "");
  const checkAdmin = ["admin", "superAdmin"].includes(user.role);
  if (checkAdmin) return <>{children}</>;
  return <Navigate to="/" />;
};

export default ProtectedRoute;
