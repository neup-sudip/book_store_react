/* eslint-disable react/prop-types */
import AdminLayout from "./AdminLayout";
import UsersLayout from "./UserLayout";

const LayoutDecider = ({ profile }) => {
  if (profile?.role === "ADMIN") {
    return <AdminLayout />;
  } else {
    return <UsersLayout />;
  }
};

export default LayoutDecider;
