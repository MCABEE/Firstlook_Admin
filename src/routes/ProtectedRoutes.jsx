import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoutes() {
  const { authorized } = useSelector((state) => state.auth);
  return authorized ? <Outlet /> : <Navigate to={"/"} />;
}

export default ProtectedRoutes;
