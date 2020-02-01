import React from "react";
import uuidv4 from "uuid/v4";
import { connect } from "react-redux";
import { fireAlert } from "redux/actions/alerts";

const alerts = [
  { id: uuidv4(), message: "oops" },
  { id: uuidv4(), message: "you messed up" },
  { id: uuidv4(), message: "all is fine" }
];

const Buttons = ({ onFireAlert }) => (
  <div>
    {alerts.map(alert => (
      <button key={alert.id} onClick={() => onFireAlert(alert)}>
        {alert.message}
      </button>
    ))}
  </div>
);

const mapDispatchToProps = dispatch => ({
  onFireAlert: a => dispatch(fireAlert(a))
});

export default connect(null, mapDispatchToProps)(Buttons);
