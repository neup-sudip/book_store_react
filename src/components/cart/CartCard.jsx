/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const CartCard = ({ cart, handleUpdate, handleRemove, handleChange }) => {
  const [quantity, setQuantity] = useState(1);
  const [cartData, setCartData] = useState(null);

  useEffect(() => {
    if (cart) {
      setCartData(cart);
      setQuantity(cart?.quantity);
    }
  }, [cart]);

  if (cartData) {
    return (
      <tr>
        <td data-th="Product">
          <div className="row">
            <div className="col-md-3 text-left">
              <img
                src="https://via.placeholder.com/250x250/5fa9f8/ffffff"
                alt=""
                className="img-fluid d-none d-md-block rounded mb-2 shadow "
              />
            </div>
            <div className="col-md-9 text-left mt-sm-2">
              <h4>{cart?.book?.title}</h4>
              <p className="font-weight-light">By {cart?.book?.author}</p>
            </div>
          </div>
        </td>
        <td data-th="Price">NPR {cart?.book?.price * quantity}</td>
        <td data-th="Quantity" className="">
          <div className="d-flex justify-content-between align-content-center ">
            <p className="form-control form-control-lg text-center">
              <span>{quantity}</span>
            </p>
            <p className="ps-2">
              <i
                role="button"
                onClick={() => {
                  if (quantity <= 11) {
                    handleChange(cart?.book?.price);
                    setQuantity((prev) => prev + 1);
                  }
                }}
                className="fa fa-arrow-up bg-primary-subtle  p-2 rounded-1 mb-1 cruso"
                aria-hidden="true"
              ></i>
              <i
                onClick={() => {
                  if (quantity > 1) {
                    handleChange(-cart?.book?.price);
                    setQuantity((prev) => prev - 1);
                  }
                }}
                role="button"
                className="fa fa-arrow-down bg-primary-subtle p-2 rounded-1 "
                aria-hidden="true"
              ></i>
            </p>
          </div>
        </td>
        <td className="actions" data-th="Action">
          <div className="text-right">
            <button
              onClick={() => handleUpdate(quantity, cart?.cartId)}
              disabled={quantity === cart?.quantity}
              className="btn border-none bg-success btn-md mb-2 text-white"
            >
              <i className="fa fa-save" aria-hidden="true"></i>
            </button>
            <button
              onClick={() => handleRemove(cart?.cartId)}
              className="btn border-none bg-danger btn-md mb-2 text-white"
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    );
  }
};

export default CartCard;
