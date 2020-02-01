import React from "react";
import { connect } from "react-redux";
import styles from "./styles.module.scss";

const Alert = ({ type }) => (
  <div className={styles.alert}>
    <h6>{type}</h6>
  </div>
);

const Alerts = ({ alerts }) => (
  <div>
    {alerts.map(alert => (
      <Alert type={alert.type} key={alert.id} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  alerts: state.alerts
});

export default connect(mapStateToProps)(Alerts);
