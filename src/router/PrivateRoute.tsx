/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function PrivateRoute(): JSX.Element {
  if (true) return <Outlet />;
  return <Navigate to={"/"} />;
}
PrivateRoute.displayName = "PrivateRoute";
export default PrivateRoute;
