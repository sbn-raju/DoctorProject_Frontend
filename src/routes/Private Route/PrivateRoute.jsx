import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, isAdmin, children }) => {
  if (!isAuthenticated) {
    <Navigate to={"/login"} />;
  }

  if (isAuthenticated && !isAdmin) {
    <Navigate to={"/login"} />;
  }
  return children ? children : <Outlet />;
};

export default PrivateRoute;
