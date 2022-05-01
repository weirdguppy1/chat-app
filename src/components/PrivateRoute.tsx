import React from "react";
import { Route, RouteProps, Navigate } from "react-router-dom";
import { auth } from "../firebase";

export type PrivateRouteProps = {
  redirectPath: string;
  children: React.ReactNode;
};

const PrivateRoute = ({ redirectPath, children }: PrivateRouteProps) => {
  const user = auth.currentUser;

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
