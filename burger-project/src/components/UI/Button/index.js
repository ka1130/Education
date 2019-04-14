import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children, onClick, btnType }) => {
  return (
    <button
      className={[styles.button, styles[btnType]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
