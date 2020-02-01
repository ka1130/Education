import React from "react";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { dismissAlert } from "redux/actions/alerts";
import Toast from "react-bootstrap/Toast";
import transitions from "./transitions.module.scss";
import styles from "./styles.module.scss";

const SimpleAlert = ({ alert, dismissAlert }) => (
  <div
    className={`${styles[alert.csn]} ${styles.alert}`}
    onClick={() => dismissAlert(alert)}
  >
    {alert.type}
  </div>
);

const ToastAlert = ({ alert, dismissAlert }) => (
  <Toast
    className={`${styles[alert.csn]} ${styles.alert}`}
    onClick={() => dismissAlert(alert)}
  >
    <Toast.Header>
      {/* <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" /> */}
      <strong className="mr-auto"> {alert.type}</strong>
      {/* <small>11 mins ago</small> */}
    </Toast.Header>
    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
  </Toast>
);

const Alerts = ({ alerts, onAlertDismiss }) => (
  <TransitionGroup className={styles.alerts}>
    {alerts.map(alert => (
      <CSSTransition key={alert.id} timeout={500} classNames={transitions}>
        {/* maybe css modules instead of global styles as above? */}
        <SimpleAlert
          alert={alert}
          key={alert.id}
          dismissAlert={onAlertDismiss}
        />
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
