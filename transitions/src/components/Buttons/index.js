import React from "react";
import uuidv4 from "uuid/v4";
import { connect } from "react-redux";
import { fireAlert } from "redux/actions/alerts";

const alerts = [
  { id: uuidv4(), type: "oops" },
  { id: uuidv4(), type: "you messed up" },
  { id: uuidv4(), type: "all is fine" }
];

const Buttons = ({ onFireAlert }) => (
  <div>
    {alerts.map(alert => (
      <button key={alert.id} onClick={() => onFireAlert(alert)}>
        {alert.type}
      </button>
    ))}
  </div>
);

const mapStateToProps = state => ({
  alerts: state.alerts
});

const mapDispatchToProps = dispatch => ({
  onFireAlert: a => dispatch(fireAlert(a))
});

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
