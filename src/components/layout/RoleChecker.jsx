/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
const RoleChecker = ({ profile }) => {
  if (profile?.role === "ADMIN") {
    return <Outlet />;
  }
  return <Navigate to="/" replace />;
};

export default RoleChecker;
