/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function NormalRoute(): JSX.Element {
  if (true) return <Navigate to={"/"} />;
  return <Navigate to={"/"} />;
}
NormalRoute.displayName = "NormalRoute";
export default NormalRoute;
