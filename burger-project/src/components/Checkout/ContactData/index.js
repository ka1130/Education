import React, { useState } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import axios from "axios";
import { purchaseBurger } from "redux/actions/ordersActions";
import Button from "components/UI/Button";
import Spinner from "components/UI/Spinner";
import Input from "components/UI/Input";
import orders from "apis/orders";
import styles from "./ContactData.module.scss";
import withErrorHandler from "components/hoc/withErrorHandler";

const initialFormData = {
  name: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Your name"
    },
    value: ""
  },
  street: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Street"
    },
    value: ""
  },
  zipCode: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Zip Code"
    },
    value: ""
  },
  country: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Country"
    },
    value: ""
  },
  email: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholder: "Email"
    },
    value: ""
  },
  deliveryMethod: {
    elementType: "select",
    elementConfig: {
      options: [
        { value: "fastest", displayValue: "Fastest" },
        { value: "cheapest", displayValue: "Cheapest" }
      ]
    },
    value: ""
  }
};

const ContactData = ({ userID, burger, orders, purchaseBurger, token }) => {
  const { ingredients, price } = burger;
  const { loading } = orders;
  const [orderData, setOrderData] = useState(initialFormData);

  const handleOrder = async e => {
    e.preventDefault();
    const order = {
      ingredients,
      price,
      orderData,
      userID
    };

    purchaseBurger(order, token);
  };

  if (loading) return <Spinner />;

  const handleInputChange = (e, inputIdentifier) => {
    const updatedData = _.cloneDeep(orderData);
    updatedData[inputIdentifier].value = e.target.value;
    setOrderData(updatedData);
  };

  const renderInputs = () => {
    return Object.entries(orderData).map(entry => {
      const { elementType, elementConfig, value } = entry[1];
      const id = entry[0];
      return (
        <Input
          key={id}
          elementType={elementType}
          elementConfig={elementConfig}
          value={value}
          onChange={e => handleInputChange(e, id)}
        />
      );
    });
  };

  return (
    <div className={styles.wrapper}>
      <h4>Enter your contact data</h4>
      <form onSubmit={handleOrder}>
        {renderInputs()}
        <Button btnType="success" onClick={handleOrder}>
          ORDER
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  userID: state.auth.userID,
  token: state.auth.token,
  burger: state.burger,
  orders: state.orders
});

const enhancedContactData = withErrorHandler(ContactData, orders);

export default connect(
  mapStateToProps,
  { purchaseBurger }
)(enhancedContactData);
