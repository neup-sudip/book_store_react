import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";
import ReactToast from "../../common/toast/ReactToast";

const UsersLayout = () => {
  return (
    <div>
      <p>User</p>
      <NavBar />
      <Outlet />
      <ReactToast />
    </div>
  );
};

export default UsersLayout;
