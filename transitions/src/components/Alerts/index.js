import React from "react";
import { connect } from "react-redux";
import { dismissAlert } from "redux/actions/alerts";
import styles from "./styles.module.scss";

const Alert = ({ alert, dismissAlert }) => {
  console.log(alert);
  return (
    <div
      className={`${styles[alert.csn]} ${styles.alert}`}
      onClick={() => dismissAlert(alert)}
    >
      {alert.type}
    </div>
  );
};

const Alerts = ({ alerts, onAlertDismiss }) => (
  <div className={styles.alerts}>
    {alerts.map(alert => (
      <Alert alert={alert} key={alert.id} dismissAlert={onAlertDismiss} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  alerts: state.alerts
});

const mapDispatchToProps = dispatch => ({
  onAlertDismiss: alert => {
    dispatch(dismissAlert(alert));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Alerts);
