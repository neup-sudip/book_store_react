import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";
import ReactToast from "../../common/toast/ReactToast";

const AdminLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <ReactToast />
    </div>
  );
};

export default AdminLayout;
