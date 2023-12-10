import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoue = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  if (user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoue;
