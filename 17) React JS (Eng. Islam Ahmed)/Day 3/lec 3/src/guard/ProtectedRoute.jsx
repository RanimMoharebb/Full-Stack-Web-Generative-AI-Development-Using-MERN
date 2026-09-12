import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuth = true;
  return isAuth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
