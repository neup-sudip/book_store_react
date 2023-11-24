import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ApiServices } from "../../utils/httpServices";

const ViewBook = () => {
  const [book, setBook] = useState("");

  const { slug } = useParams();
  const navigate = useNavigate();

  const getBook = async () => {
    const { data, success } = await ApiServices.get({ url: `/books/${slug}` });

    if (success) {
      setBook(data);
    } else {
      navigate("/books");
    }
  };

  const handleCart = async () => {
    const { data } = await ApiServices.post({
      url: "/cart/add",
      data: book?.bookId,
    });
    console.log(data);
  };

  useEffect(() => {
    getBook();
    //eslint-disable-next-line
  }, [slug]);

  return (
    <div className="card">
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
            <button
              onClick={handleCart}
              className="btn btn-dark btn-rounded btn-sm me-1 "
              data-toggle="tooltip"
              type="button"
              data-original-title="Add to cart"
            >
              <i className="fa fa-shopping-cart"></i>
            </button>
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
    </div>
  );
};

export default ViewBook;
