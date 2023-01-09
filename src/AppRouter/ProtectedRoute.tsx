import React from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";

interface IProtectedRouteProps {
  authenticated: boolean;
  children: React.ReactNode;
}

const ProtectedRoute = ({ authenticated, children }: IProtectedRouteProps) => (
  <>
    {authenticated ? (
      <>
        <Navbar />
        {children}
      </>
    ) : (
      <Navigate replace to="/login" />
    )}
  </>
);

export default ProtectedRoute;
