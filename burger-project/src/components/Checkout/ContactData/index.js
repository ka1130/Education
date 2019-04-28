import React, { useState } from "react";
import uuidv4 from "uuid/v4";
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

  const handleInputChange = (e, inputIdentifier) => {
    const updatedFormData = _.cloneDeep(orderForm);
    updatedFormData[inputIdentifier] = e.target.value;
    setOrderForm(updatedFormData);
  };

  const renderInputs = () =>
    Object.entries(orderForm).map(entry => {
      console.log(entry);
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

  return (
    <div className={styles.wrapper}>
      <h4>Enter your contact data</h4>
      <form>
        {renderInputs()}
        <Button btnType="success" onClick={handleOrder}>
          ORDER
        </Button>
      </form>
    </div>
  );
};

export default ContactData;
