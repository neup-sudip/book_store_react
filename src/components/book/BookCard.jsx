import { Link } from "react-router-dom";
import "./bookcard.css";
/* eslint-disable react/prop-types */
const BookCard = ({ book }) => {
  return (
    <div className="col-xs-12 col-md-6 bootstrap snippets bootdeys">
      <div className="product-content product-wrap clearfix">
        <div className="row">
          <div className="col-md-5 col-sm-12 col-xs-12">
            <div className="product-image">
              <img
                src="https://clipart-library.com/images/6Tpo6G8TE.jpg"
                alt="194x228"
                className="img-responsive w-100"
              />
              <span className="tag2 hot">{book?.genre}</span>
            </div>
          </div>
          <div className="col-md-7 col-sm-12 col-xs-12">
            <div className="product-deatil">
              <h1 className="name">
                <p>
                  {book?.title}
                  <span>By {book?.author}</span>
                </p>
              </h1>
              <p className="price-container">
                <span>NRP {book?.price}</span>
              </p>
              <span className="tag1"></span>
            </div>
            <div className="text-dark ">
              <p className="px-2 text-truncate">{book?.detail}</p>
            </div>
            <div className="product-info smart-form">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-6">
                  <Link
                    to={`/books/view/${book?.slug}`}
                    className="btn btn-primary"
                  >
                    More details
                  </Link>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-6">
                  <div className="rating">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <label key={item}>
                        <i
                          className={`fa fa-star ${
                            item > book?.overallRating
                              ? "text-light-emphasis"
                              : "text-warning"
                          }`}
                        ></i>
                      </label>
                    ))}
                    <label className="ms-1 text-warning font-weight-bold">
                      {`${book?.overallRating?.toFixed(1)}/5 (${
                        book?.numberOfReviews
                      })`}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="col-sm-6 col-md-4 col-xl-3">
    //   <div className="p-2">
    //     <div className="card">
    //       <h5 className="card-header">
    //         {book?.title}
    //         <span
    //           className={`btn border-2 ${
    //             book?.available ? "btn-success border-success" : "btn-danger"
    //           } rounded-circle px-2 ms-1`}
    //         ></span>
    //       </h5>
    //       <div className="card-body">
    //         <img src="" />
    //         <h6 className="card-text text-decoration-underline ">
    //           {book?.author}
    //         </h6>
    //         <p className="card-text text-truncate">{book?.detail}</p>
    //         <p className="card-text">
    //           <small className="text-muted">Price: </small>
    //           {book?.price}
    //         </p>
    //         <p>
    //           {`${book?.overallRating?.toFixed(1)}/5 (${
    //             book?.numberOfReviews
    //           })`}
    //         </p>
    //         <Link
    //           className="btn btn-primary btn-sm"
    //           to={`/books/view/${book?.slug}`}
    //         >
    //           More details
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default BookCard;
