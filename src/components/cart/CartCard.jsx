/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const CartCard = ({ cart, handleUpdate, handleRemove }) => {
  const [cartDate, setCartData] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (cart) {
      setCartData(cart);
      setQuantity(cart?.quantity);
    }
  }, [cart]);

  if (cartDate) {
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
              <h4>{cart?.bookId?.title}</h4>
              <p className="font-weight-light">By {cart?.bookId?.author}</p>
            </div>
          </div>
        </td>
        <td data-th="Price">NPR {cart?.bookId?.price}</td>
        <td data-th="Quantity">
          <input
            type="number"
            className="form-control form-control-lg text-center"
            value={quantity}
            min={1}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </td>
        <td className="actions" data-th="">
          <div className="text-right">
            <button
              onClick={() => handleUpdate(quantity, cart?.cartId)}
              className="btn btn-white border-secondary bg-white btn-md mb-2"
            >
              <i className="fas fa-sync"></i>
            </button>
            <button
              onClick={() => handleRemove(cart?.cartId)}
              className="btn btn-white border-secondary bg-white btn-md mb-2"
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
