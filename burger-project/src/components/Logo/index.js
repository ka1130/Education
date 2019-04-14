import React from "react";
import logoImg from "assets/images/burger-logo.png";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logoImg} alt="logo" />
    </div>
  );
};

export default Logo;
