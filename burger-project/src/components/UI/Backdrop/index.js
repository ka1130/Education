import React from "react";
import styles from "./Backdrop.module.scss";

const Backdrop = ({ visible, onClick }) =>
  visible ? <div className={styles.backdrop} onClick={onClick} /> : null;

export default Backdrop;
