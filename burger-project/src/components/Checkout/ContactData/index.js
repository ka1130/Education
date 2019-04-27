import React, { useState } from "react";
import Button from "components/UI/Button";
import orders from "apis/orders";
import styles from "./ContactData.module.scss";

const initialContactData = {
  name: "",
  email: "",
  address: {
    street: "",
    postalCode: ""
  }
};

const ContactData = props => {
  const ingredients = props.history.location.state;
  console.log("from contact data ingredients", ingredients);
  console.log("from contact data props", props);
  const [contactData, setContactData] = useState(initialContactData);
  const [loading, setLoading] = useState(false);

  const handleOrder = e => {
    e.preventDefault();
    setLoading(true);
    const order = {
      customer: {
        address: {
          country: "Poland",
          street: "Budowlana 1",
          zipCode: "00111"
        },
        email: "lorem@example.pl",
        name: "Jasio Kowalski"
      },
      deliveryMethod: "fastest",
      ingredients
      // price
    };
    orders
      .post("orders.json", order)
      .then(response => {
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
    console.log(ingredients);
  };

  return (
    <div className={styles.wrapper}>
      <h4>Enter your contact data</h4>
      <form>
        <input type="text" name="name" placeholder="Enter your name" />
        <input type="email" name="email" placeholder="Enter your email" />
        <input type="text" name="street" placeholder="Street" />
        <input type="text" name="code" placeholder="Postal code" />
        <Button btnType="success" onClick={handleOrder}>
          ORDER
        </Button>
      </form>
    </div>
  );
};

export default ContactData;
