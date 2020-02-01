import React from "react";
import Alerts from "components/Alerts";
import styles from "./styles.module.scss";

const App = () => (
  <div className={styles.wrapper}>
    <h2>APP</h2>
    <Alerts />
  </div>
);

export default App;
