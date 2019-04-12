import React from "react";
import styles from "./BuildControl.module.scss";

const BuildControl = ({ label }) => {
  return (
    <div className={styles.buildControl}>
      <div className={styles.label}>{label}</div>
      <button className={styles.less}>Less</button>
      <button className={styles.more}>More</button>
    </div>
  );
};

export default BuildControl;
