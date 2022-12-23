import React from "react";
import { Navigate } from "react-router-dom";

interface IProtectedRouteProps {
  authenticated: boolean;
  children: React.ReactNode;
}

const ProtectedRoute = ({ authenticated, children }: IProtectedRouteProps) => (
  <>{authenticated ? children : <Navigate replace to="/login" />}</>
);

export default ProtectedRoute;
