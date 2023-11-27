/* eslint-disable react/prop-types */
import AdminLayout from "../components/layout/AdminLayout";
import UsersLayout from "../components/layout/UserLayout";

const LayoutDecider = ({ profile }) => {
  if (profile?.role === "ADMIN") {
    return <AdminLayout />;
  } else {
    return <UsersLayout />;
  }
};

export default LayoutDecider;
