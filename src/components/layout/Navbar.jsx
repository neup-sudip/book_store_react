import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" mb-2">
      <nav className="d-sm-flex justify-content-between">
        <h1>
          <Link to="/">Book Store</Link>
        </h1>
        <div className="position-fixed d-none top-0 end-0 z-1 p-2">
          <i className="fa fa-bars fa-2x"></i>
        </div>

        <div className="position-fixed top-0 end-0 z-1 p-2">
          <i className="fa-solid fa-xmark fa-2x"></i>
        </div>
        <ul id="nav-ul" className="nav d-grid d-sm-flex align-content-center">
          <li className="nav-item rounded-1 m-1">
            <Link to="/users" className="nav-link">
              Users
            </Link>
          </li>
          <li className="nav-item rounded-1 m-1">
            <Link to="/books" className="nav-link">
              Books
            </Link>
          </li>
          <li className="nav-item rounded-1 m-1">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item rounded-1 m-1">
            <Link to="/cart" className="nav-link">
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
