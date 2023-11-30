import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ApiServices } from "../../utils/httpServices";
import {
  emitErrorToast,
  emitSuccessToast,
} from "../../common/toast/EmitToast.js";
import { GET_CART } from "../../redux/sagas/actions";
import ReviewList from "./review/ReviewList.jsx";

const ViewBook = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.user);
  const { books } = useSelector((state) => state.cart);

  const [book, setBook] = useState("");
  const [reviews, setReviews] = useState("");
  const [onCart, setOnCart] = useState(true);

  const getBook = async () => {
    const { data, success, message } = await ApiServices.get({
      url: `/books/${slug}`,
    });
    if (success) {
      const cart =
        books &&
        books?.length > 0 &&
        books.find((item) => item?.book?.bookId === data?.bookId);

      !cart?.cartId && setOnCart(false);

      setBook(data);
      setReviews(data?.reviews);
    } else {
      emitErrorToast(message);
      navigate("/books");
    }
  };

  const handleCart = async () => {
    if (!profile) {
      emitErrorToast("Please login first !");
    } else {
      const { message, success } = await ApiServices.post({
        url: "/cart/add",
        data: book?.bookId,
      });

      if (success) {
        emitSuccessToast(message);
        setOnCart(true);
        dispatch(GET_CART({ url: "/cart" }));
      } else {
        emitErrorToast(message);
      }
    }
  };

  useEffect(() => {
    getBook();
    //eslint-disable-next-line
  }, [slug]);

  return (
    <div className="card">
      {profile?.role === "ADMIN" && (
        <div className="text-end">
          <Link className="btn btn-primary btn-sm" to={`/books/edit/${slug}`}>
            Edit Book
          </Link>
        </div>
      )}

      <div className="card-body">
        <div className="d-flex align-content-center justify-content-between ">
          <div>
            <h3 className="card-title">{book?.title}</h3>
            <h6 className="card-subtitle">
              By <span className="">{book?.author}</span>
            </h6>
          </div>
          <div>
            <h6 className="">NRP {book?.price}</h6>
            {!onCart && (
              <button
                onClick={handleCart}
                className="btn btn-dark btn-rounded btn-sm me-1 "
                data-toggle="tooltip"
                type="button"
                data-original-title="Add to cart"
              >
                <i className="fa fa-shopping-cart"></i>
              </button>
            )}

            <button
              type="button"
              className="btn btn-primary btn-rounded btn-sm"
            >
              Buy Now
            </button>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-lg-5 col-md-5 col-sm-6">
            <div className="white-box text-center">
              <img
                src="https://www.bootdey.com/image/430x600/00CED1/000000"
                className="img-responsive"
              />
            </div>
          </div> */}
          <div className="col-lg-7 col-md-7 col-sm-6">
            <h4 className="box-title mt-5">Book description</h4>
            <p>{book?.detail}</p>
          </div>
        </div>
      </div>

      <ReviewList
        reviews={reviews}
        setReviews={setReviews}
        profile={profile}
        bookId={book?.bookId}
      />
    </div>
  );
};

export default ViewBook;
