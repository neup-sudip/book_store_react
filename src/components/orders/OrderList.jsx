import { useEffect, useState } from "react";
import { ApiServices } from "../../utils/httpServices";
import { emitErrorToast } from "../../common/toast/EmitToast";
import OrderCard from "./OrderCard";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [sort, setSort] = useState("orderId");
  const [orderBy, setOrderBy] = useState(1);

  const getOrders = async () => {
    const { data, message, success } = await ApiServices.get({
      url: `/admin/orders?sort=${sort}&order=${orderBy}`,
    });

    if (success) {
      setOrders(data);
    } else {
      emitErrorToast(message);
    }
  };

  const tableHead = [
    { label: "Order ID", value: "orderId" },
    { label: "Book", value: "book" },
    { label: "Status", value: "status" },
    { label: "Order Date", value: "date" },
    { label: "Last update", value: "updatedOn" },
  ];

  useEffect(() => {
    getOrders();
  }, [sort, orderBy]);

  return (
    <div className="">
      <h1>List of Orders</h1>
      {orders?.length > 0 ? (
        <table className="table">
          <thead className="thead-light">
            <tr>
              {tableHead?.map((head, idx) => (
                <th
                  key={idx}
                  onClick={() => {
                    setSort(head?.value);
                    setOrderBy((prev) => -prev);
                  }}
                  scope="col"
                  className="pointer"
                >
                  {orderBy === 1 ? (
                    <i className="fa-solid fa-arrow-down"></i>
                  ) : (
                    <i className="fa-solid fa-arrow-up"></i>
                  )}

                  {head?.label}
                </th>
              ))}
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Total price</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, idx) => (
              <OrderCard key={idx} order={order} />
            ))}
          </tbody>
        </table>
      ) : (
        <p>No order found</p>
      )}
    </div>
  );
};

export default OrderList;
