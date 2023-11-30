/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LOGOUT } from "../../redux/sagas/actions";

const Navbar = () => {
  const { profile } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const handleLogout = () => {
    dispatch(LOGOUT());
  };

  const handleSearch = () => {
    if (search?.length > 0) {
      setSearch("");
      navigate(`/books?query=${search}&page=1`);
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-light sticky-top mb-2 "
      data-bs-theme="light"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Book Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto">
            {profile && profile?.role === "ADMIN" && (
              <>
                <NavLink title="Users" link="/users" />
                <NavLink title="Add Book" link="/books/add" />
              </>
            )}

            <NavLink title="Books" link="/books" />
          </ul>

          <div className="d-lg-flex justify-content-between">
            <div className="d-flex me-5">
              <input
                className="form-control my-2 my-sm-0 me-lg-2"
                type="search"
                placeholder="Search"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                onClick={handleSearch}
                className="btn btn-secondary my-2 my-sm-0"
                type="button"
              >
                Search
              </button>
            </div>

            <ul className="navbar-nav">
              {profile && (
                <>
                  <NavLink title="Profile" link="/profile" />
                  <NavLink title="Cart" link="/cart" />
                </>
              )}
              <li className="nav-item">
                {profile ? (
                  <button
                    onClick={handleLogout}
                    className="nav-link"
                    type="button"
                  >
                    Logout
                  </button>
                ) : (
                  <Link to="/auth/login" className="nav-link">
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

export const NavLink = ({ title, link }) => {
  return (
    <li className="nav-item">
      <Link to={link} className="nav-link">
        {title}
      </Link>
    </li>
  );
};
