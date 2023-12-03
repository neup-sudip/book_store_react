/* eslint-disable react/prop-types */
import AdminLayout from "../common/layout/AdminLayout";
import UsersLayout from "../common/layout/UserLayout";

const LayoutDecider = ({ profile }) => {
  if (profile?.role === "ADMIN") {
    return <AdminLayout />;
  } else {
    return <UsersLayout />;
  }
};

export default LayoutDecider;
