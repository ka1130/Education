import React from "react";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { dismissAlert } from "redux/actions/alerts";
import Toast from "react-bootstrap/Toast";
import transitions from "./transitions.module.scss";
import styles from "./styles.module.scss";

const ToastAlert = ({ alert, dismissAlert }) => (
  <Toast
    className={`${styles[alert.csn]} ${styles.alert}`}
    onClose={() => dismissAlert(alert)}
  >
    <Toast.Header>
      <strong className="mr-auto">{alert.type}</strong>
    </Toast.Header>
    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
  </Toast>
);

const MyToast = ({ alert, dismissAlert }) => (
  <div
    className={`${styles[alert.csn]} ${styles.alert} ${styles.myToast}`}
    onClick={() => dismissAlert(alert)}
  >
    <div className="toast-header">
      <strong className="mr-auto">{alert.type}</strong>
    </div>
    <div class="toast-body">Hello, world! This is a toast message.</div>
  </div>
);

const Alerts = ({ alerts, onAlertDismiss }) => (
  <TransitionGroup className={styles.alerts}>
    {alerts.map(alert => (
      <CSSTransition key={alert.id} timeout={500} classNames={transitions}>
        <MyToast alert={alert} key={alert.id} dismissAlert={onAlertDismiss} />
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
