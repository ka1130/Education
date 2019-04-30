import React, { useState } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import Button from "components/UI/Button";
import Spinner from "components/UI/Spinner";
import Input from "components/UI/Input";
import orders from "apis/orders";
import styles from "./ContactData.module.scss";

const initialFormData = {
  name: {
    elementType: "text",
    elementConfig: {
      type: "text",
      placeholder: "Your name"
    },
    value: ""
  },
  street: {
    elementType: "text",
    elementConfig: {
      type: "text",
      placeholder: "Street"
    },
    value: ""
  },
  zipCode: {
    elementType: "text",
    elementConfig: {
      type: "text",
      placeholder: "Zip Code"
    },
    value: ""
  },
  country: {
    elementType: "text",
    elementConfig: {
      type: "text",
      placeholder: "Country"
    },
    value: ""
  },
  email: {
    elementType: "email",
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

const ContactData = ({ burger, history }) => {
  const { ingredients, price } = burger;
  const [loading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState(initialFormData);

  const handleOrder = e => {
    e.preventDefault();
    setLoading(true);
    const order = {
      ingredients,
      price,
      orderData
    };
    orders
      .post("orders.json", order)
      .then(response => {
        setLoading(false);
        history.push("/");
      })
      .catch(error => {
        setLoading(false);
      });
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

const mapStateToProps = state => ({ burger: state.burger });

export default connect(mapStateToProps)(ContactData);
