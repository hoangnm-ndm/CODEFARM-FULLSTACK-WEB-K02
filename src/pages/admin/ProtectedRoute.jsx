import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user") || "");

  if (user?.role === "admin") return <>{children}</>;

  return <Navigate to="/login" />;
};

export default ProtectedRoute;
