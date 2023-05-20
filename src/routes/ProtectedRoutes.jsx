import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../context/authContext";

function ProtectedRoutes() {
  const { auth } = useContext(authContext);
  return auth ? <Outlet /> : <Navigate to={"/"} />;
}

export default ProtectedRoutes;
