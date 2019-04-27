import React, { useState } from "react";
import Button from "components/UI/Button";
import Spinner from "components/UI/Spinner";
import Input from "components/UI/Input";
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

const ContactData = ({ history }) => {
  const { ingredients, price } = history.location.state;
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

  return (
    <div className={styles.wrapper}>
      <h4>Enter your contact data</h4>
      <form>
        <Input type="text" name="name" placeholder="Enter your name" />
        <Input type="email" name="email" placeholder="Enter your email" />
        <Input type="text" name="street" placeholder="Street" />
        <Input type="text" name="code" placeholder="Postal code" />
        <Button btnType="success" onClick={handleOrder}>
          ORDER
        </Button>
      </form>
    </div>
  );
};

export default ContactData;
