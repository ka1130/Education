import React, { useState } from "react";
import Button from "components/UI/Button";
import styles from "./ContactData.module.scss";

const initialContactData = {
  name: "",
  email: "",
  address: {
    street: "",
    postalCode: ""
  }
};

const ContactData = () => {
  const [contactData, setContactData] = useState(initialContactData);
  return (
    <div className={styles.wrapper}>
      <h4>Enter your contact data</h4>
      <form>
        <input type="text" name="name" placeholder="Enter your name" />
        <input type="email" name="email" placeholder="Enter your email" />
        <input type="text" name="street" placeholder="Street" />
        <input type="text" name="code" placeholder="Postal code" />
        <Button btnType="success">ORDER</Button>
      </form>
    </div>
  );
};

export default ContactData;
