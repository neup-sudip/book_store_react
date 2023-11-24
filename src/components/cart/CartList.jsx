import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";

const CartList = () => {
  const { books } = useSelector((state) => state?.cart);

  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    // getCartList();
    if (books) {
      setBookList(books);
    }
    //eslint-disable-next-line
  }, []);

  const handleRemove = async (cartId) => {
    console.log(cartId);
  };

  const handleUpdate = async (quantity, cartId) => {
    console.log(quantity, cartId);
  };

  return (
    <section className="pt-5 pb-5">
      <div className="container">
        <div className="row w-100">
          <div className="col-lg-12 col-md-12 col-12">
            <h3 className="display-5 mb-2 text-center">Shopping Cart</h3>
            <p className="mb-5 text-center">
              <i className="text-success font-weight-bold">
                {bookList?.length}{" "}
              </i>
              items in your cart
            </p>
            <table
              id="shoppingCart"
              className="table table-condensed table-responsive"
            >
              <thead>
                <tr>
                  <th style={{ width: "60%" }}>Product</th>
                  <th style={{ width: "12%" }}>Price</th>
                  <th style={{ width: "10%" }}>Quantity</th>
                  <th style={{ width: "16%" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {bookList?.map((cart, idx) => (
                  <CartCard
                    key={idx}
                    cart={cart}
                    handleUpdate={handleUpdate}
                    handleRemove={handleRemove}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="d-flex justify-content-end ">
          <div>
            <h4>Subtotal:</h4>
            <h1>$99.00</h1>
          </div>
        </div>
        <div className="mt-4 d-flex align-items-center justify-content-between ">
          <div className="">
            <Link to="/" className="btn btn-primary mb-4 btn-lg pl-5 pr-5">
              Checkout
            </Link>
          </div>
          <div className="">
            <Link href="catalog.html">
              <i className="fas fa-arrow-left mr-2"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartList;
