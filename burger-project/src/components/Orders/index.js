import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "redux/actions/ordersActions";
import ordersApi from "apis/orders";
import Order from "components/Order";
import Spinner from "components/UI/Spinner";
import withErrorHandler from "components/hoc/withErrorHandler";

const Orders = props => {
  const { orders } = props.orders;

  useEffect(() => {
    props.fetchOrders();
  }, []);

  if (orders.loading) return <Spinner />;
  if (!orders || !orders.length) return <p>No orders</p>;
  return (
    <div>
      {orders.map(order => (
        <Order key={order.id} order={order} />
      ))}
    </div>
  );
};

const enhancedOrders = withErrorHandler(Orders, ordersApi);

const mapStateToProps = state => ({ orders: state.orders });

export default connect(
  mapStateToProps,
  { fetchOrders }
)(enhancedOrders);
