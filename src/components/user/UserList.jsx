import { useEffect, useState } from "react";
import { ApiServices } from "../../utils/httpServices";
import { emitErrorToast } from "../../common/toast/EmitToast.js";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const { data, message, success } = await ApiServices.get("/admin/users");
    if (success) {
      setUsers(data);
    } else {
      emitErrorToast(message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="">
      <h1>List of Users</h1>
      {users?.length > 0 ? (
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Email</th>
              <th scope="col">Username</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, idx) => (
              <tr key={idx}>
                <th scope="row">{idx + 1}</th>
                <td>{user?.email || "--"}</td>
                <td>{user?.username || "--"}</td>
                <td>{user?.role || "--"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No User found</p>
      )}
    </div>
  );
};

export default UserList;
