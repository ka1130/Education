import React from "react";
import Alerts from "components/Alerts";
import Buttons from "components/Buttons";
import styles from "./styles.module.scss";

const App = () => (
  <div className={styles.wrapper}>
    <h2>APP</h2>
    <Buttons />
    <Alerts />
  </div>
);

export default App;
