import React from "react";
import styles from "./Input.module.scss";

const Input = ({ label, elementType, elementConfig, value }) => {
  const renderInput = () => {
    switch (elementType) {
      case "text":
        return (
          <input
            type="text"
            className={styles.input}
            {...elementConfig}
            value={value}
          />
        );
      case "email":
        return (
          <input
            type="email"
            className={styles.input}
            {...elementConfig}
            value={value}
          />
        );
      case "textarea":
        return (
          <input
            type="textarea"
            className={styles.input}
            {...elementConfig}
            value={value}
          />
        );
      default:
        return (
          <input
            type="text"
            className={styles.input}
            {...elementConfig}
            value={value}
          />
        );
    }
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      {renderInput()}
    </div>
  );
};

export default Input;
