import React from "react";
import { connect } from "react-redux";
import styles from "./styles.module.scss";

const Alert = ({ alert }) => (
  <div className={`${styles[alert.csn]} ${styles.alert}`}>{alert.type}</div>
);

const Alerts = ({ alerts }) => (
  <div className={styles.alerts}>
    {alerts.map(alert => (
      <Alert alert={alert} key={alert.id} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  alerts: state.alerts
});

export default connect(mapStateToProps)(Alerts);
