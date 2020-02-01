import React from "react";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { dismissAlert } from "redux/actions/alerts";
import "index.css";
import styles from "./styles.module.scss";

const Alert = ({ alert, dismissAlert }) => (
  <div
    className={`${styles[alert.csn]} ${styles.alert}`}
    onClick={() => dismissAlert(alert)}
  >
    {alert.type}
  </div>
);

const Alerts = ({ alerts, onAlertDismiss }) => (
  // <div className={styles.alerts}>
  <TransitionGroup className={styles.alerts}>
    {alerts.map(alert => (
      <CSSTransition key={alert.id} timeout={500} classNames="move">
        <Alert alert={alert} key={alert.id} dismissAlert={onAlertDismiss} />
      </CSSTransition>
    ))}
  </TransitionGroup>
  // </div>
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
