/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ApiServices } from "../../utils/httpServices";
import { emitErrorToast, emitSuccessToast } from "../../common/toast/EmitToast";

const OrderCard = ({ order }) => {
  const [orderData, setOrderData] = useState("");

  const handleUpdate = async () => {
    const { success, message } = await ApiServices.put({
      url: `/admin/orders/${orderData?.orderId}`,
      data: orderData?.status,
    });
    if (success) {
      emitSuccessToast(message);
    } else {
      emitErrorToast(message);
    }
  };

  useEffect(() => {
    if (order) {
      setOrderData(order);
    }
  }, [order]);

  return (
    <tr>
      <th scope="row">{orderData?.orderId}</th>
      <td>{orderData?.book?.title || "--"}</td>
      {/* <td>{orderData?.status || "--"}</td> */}
      <td>
        <select
          value={orderData?.status}
          onChange={(e) =>
            setOrderData((prev) => ({ ...prev, status: e.target.value }))
          }
        >
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
        </select>
      </td>
      <td>{new Date(orderData?.date).toLocaleDateString() || "--"}</td>
      <td>{new Date(orderData?.updatedOn).toLocaleDateString() || "--"}</td>
      <td>{orderData?.quantity || "--"}</td>
      <td>{orderData?.book?.price || "--"}</td>
      <td>{orderData?.totalPrice || "--"}</td>
      <td className="">
        <button
          onClick={handleUpdate}
          type="button"
          className="btn btn-success"
        >
          Update
        </button>
      </td>
    </tr>
  );
};

export default OrderCard;
