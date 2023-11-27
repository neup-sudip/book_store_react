import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BookCard = ({ book }) => {
  return (
    <div className="col-sm-6 col-md-4 col-xl-3">
      <div className="p-2">
        <div className="card">
          <h5 className="card-header">
            {book?.title}
            <span
              className={`btn border-2 ${
                book?.available ? "btn-success border-success" : "btn-danger"
              } rounded-circle px-2 ms-1`}
            ></span>
          </h5>
          <div className="card-body">
            <h6 className="card-text text-decoration-underline ">
              {/* <span className="text-muted">Author: </span> */}
              {book?.author}
            </h6>
            <p className="card-text text-truncate">{book?.detail}</p>
            <p className="card-text">
              <small className="text-muted">Price: </small>
              {book?.price}
            </p>
            <Link
              className="btn btn-primary btn-sm"
              to={`/books/view/${book?.slug}`}
            >
              More details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
