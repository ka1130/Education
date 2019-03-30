import React from "react";
import styles from "./Spinner.css";

const Spinner = () => {
  return (
    <div className={styles.container}>
      <img src="images/loader.gif" />
    </div>
  );
};

export default Spinner;
