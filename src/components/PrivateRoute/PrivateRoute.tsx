import { Navigate, Outlet } from "react-router-dom";
import React from "react";

export const PrivateRoute = () => {
  const token = localStorage.getItem("loggedUser");
  return token ? <Outlet /> : <Navigate to="/login" />;
};
