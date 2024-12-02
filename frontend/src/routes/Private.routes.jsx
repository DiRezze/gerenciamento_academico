import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";  // Ajuste o caminho do seu contexto, se necessário

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
