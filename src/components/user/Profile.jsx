import { useEffect, useState } from "react";
import { ApiServices } from "../../utils/httpServices";
import { emitErrorToast } from "../../common/toast/EmitToast";
import "./profile.css";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  const getUser = async () => {
    const { data, success, message } = await ApiServices.get({
      url: "/users/profile",
    });
    if (success) {
      setUserData(data);
    } else {
      emitErrorToast(message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
      <div className="container py-5 h-100">
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
  );
};

export default Profile;
