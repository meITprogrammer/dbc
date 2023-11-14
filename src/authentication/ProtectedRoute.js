import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useUserAuth();

  console.log("Check user in Private: ", currentUser);
  if (!currentUser) {
    alert ("Sign in to access this page")
    return <Navigate to="/signin" />;
  }
  return children;
};

export default ProtectedRoute;
