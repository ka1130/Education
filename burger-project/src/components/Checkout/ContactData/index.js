import React, { useState } from "react";
import uuidv4 from "uuid/v4";
import Button from "components/UI/Button";
import Spinner from "components/UI/Spinner";
import Input from "components/UI/Input";
import orders from "apis/orders";
import styles from "./ContactData.module.scss";

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

const ContactData = ({ history }) => {
  const { ingredients, price } = history.location.state;
  const [loading, setLoading] = useState(false);
  const [orderForm, setOrderForm] = useState(initialFormData);

  const handleOrder = e => {
    e.preventDefault();
    setLoading(true);
    const order = {
      ingredients,
      price
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

  const renderInputs = () =>
    Object.entries(orderForm).map(entry => {
      console.log(entry);
      const { elementType, elementConfig, value } = entry[1];
      return (
        <Input
          key={uuidv4()}
          elementType={elementType}
          elementConfig={elementConfig}
          value={value}
        />
      );
    });

  return (
    <div className={styles.wrapper}>
      <h4>Enter your contact data</h4>
      <form>
        {/* <Input elementType="" elementConfig="" value="" /> */}
        {renderInputs()}
        <Button btnType="success" onClick={handleOrder}>
          ORDER
        </Button>
      </form>
    </div>
  );
};

export default ContactData;
