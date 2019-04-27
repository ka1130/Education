import React, { useState, useEffect } from "react";
import ordersApi from "apis/orders";
import Order from "components/Order";
import withErrorHandler from "components/hoc/withErrorHandler";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await ordersApi.get("/orders.json");
        let ordersArr = Object.keys(response.data).map(key => {
          return { ...response.data[key], id: key };
        });
        setOrders(ordersArr);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      <Order />
      <Order />
    </div>
  );
};

export default withErrorHandler(Orders, ordersApi);
