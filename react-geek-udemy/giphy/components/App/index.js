import React from "react";
import Navigation from "components/Navigation";
import styles from "./App.css";

const App = ({ children }) => {
  return (
    <div>
      <h1 className={styles.header}>Giphy Master</h1>
      <Navigation />
      {children}
    </div>
  );
};

export default App;
