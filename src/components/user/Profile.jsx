import { useEffect, useState } from "react";
import { ApiServices } from "../../utils/httpServices";
import { emitErrorToast } from "../../common/toast/EmitToast";
import "./profile.css";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  const [orders, setOrders] = useState([]);
  const [showOrders, setShowOrders] = useState(false);

  const getUser = async () => {
    const { data, success, message } = await ApiServices.get("/users/profile");
    if (success) {
      setUserData(data);
    } else {
      emitErrorToast(message);
    }
  };

  const getOrders = async () => {
    const { data, success, message } = await ApiServices.get("/order");
    if (success) {
      setOrders(data);
    } else {
      emitErrorToast(message);
    }
  };

  useEffect(() => {
    if (showOrders) {
      getOrders();
    }
  }, [showOrders]);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <section className="" style={{ backgroundColor: "#f4f5f7" }}>
        <div className="container py-0 py-lg-5  ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                <div className="row g-0">
                  <div
                    className="col-md-4 gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: ".5rem",
                      borderBottomLeftRadius: ".5rem",
                    }}
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar"
                      className="img-fluid my-5"
                      style={{ width: "80px" }}
                    />
                    <h5>Not set Name Yet</h5>

                    <button type="button" className="btn btn-outline-primary ">
                      <i className="far fa-edit d-flex justify-content-between align-content-center "></i>
                    </button>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6>Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Email</h6>
                          <p className="text-muted">{userData?.email}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Username</h6>
                          <p className="text-muted">{userData?.username}</p>
                        </div>
                      </div>
                      <h6>Projects</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Recent</h6>
                          <p className="text-muted">Lorem ipsum</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Most Viewed</h6>
                          <p className="text-muted">Dolor sit amet</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-start">
                        <p>
                          <i className="fab fa-facebook-f fa-lg me-3"></i>
                        </p>
                        <p>
                          <i className="fab fa-twitter fa-lg me-3"></i>
                        </p>
                        <p>
                          <i className="fab fa-instagram fa-lg"></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="my-2">
        <button
          type="button"
          onClick={() => setShowOrders(true)}
          className="w-100 btn bg-dark-subtle  d-flex align-content-center justify-content-between "
        >
          <span>View My Orders</span>
          <span>
            <i className="fa fa-arrow-down"></i>
          </span>
        </button>
      </div>

      {showOrders && (
        <div className="my-3">
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">Book</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Total price</th>
                <th scope="col">Status</th>
                <th scope="col">Order Date</th>
                <th scope="col">Updated On</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order, idx) => (
                <tr key={idx}>
                  <td scope="col">{order?.book?.title || "--"}</td>
                  <td scope="col">{order?.quantity || "--"}</td>
                  <td scope="col">NRP {order?.price || "--"}</td>
                  <td scope="col">NRP {order?.totalPrice || "--"}</td>
                  <td scope="col">{order?.status || "--"}</td>
                  <td scope="col">
                    {new Date(order?.date).toLocaleDateString() || "--"}
                  </td>
                  <td scope="col">
                    {new Date(order?.updatedOn).toLocaleDateString() || "--"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Profile;
