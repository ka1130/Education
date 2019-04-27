import React from "react";
import uuidv4 from "uuid/v4";
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
      case "select":
        return (
          <select className={styles.input} value={value}>
            {elementConfig.options.map(el => (
              <option key={uuidv4()} value={el.value}>
                {el.displayValue}
              </option>
            ))}
          </select>
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
