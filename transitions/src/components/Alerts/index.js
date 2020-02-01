import React from "react";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { dismissAlert } from "redux/actions/alerts";
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
  <TransitionGroup className={styles.alerts}>
    {alerts.map(alert => (
      <CSSTransition key={alert.id} timeout={500} classNames="move">
        {/* maybe css modules instead of global styles as above? */}
        <Alert alert={alert} key={alert.id} dismissAlert={onAlertDismiss} />
      </CSSTransition>
    ))}
  </TransitionGroup>
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
