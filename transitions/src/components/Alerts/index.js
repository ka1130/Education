import React from "react";
import { connect } from "react-redux";
import styles from "./styles.module.scss";

const Alert = ({ type }) => <div className={styles.alert}>{type}</div>;

const Alerts = ({ alerts }) => (
  <div className={styles.alerts}>
    {alerts.map(alert => (
      <Alert type={alert.type} key={alert.id} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  alerts: state.alerts
});

export default connect(mapStateToProps)(Alerts);
