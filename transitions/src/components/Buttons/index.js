import React from "react";
import uuidv4 from "uuid/v4";
import { connect } from "react-redux";
import { fireAlert } from "redux/actions/alerts";

const alerts = [
  { id: uuidv4(), type: "oops", csn: "alert1", no: 1 },
  { id: uuidv4(), type: "you messed up", csn: "alert2", no: 2 },
  { id: uuidv4(), type: "all is fine", csn: "alert3", no: 3 }
];

const Buttons = ({ onFireAlert }) => (
  <div>
    {alerts.map(alert => (
      <button key={alert.id} onClick={() => onFireAlert(alert, uuidv4())}>
        {alert.type}
      </button>
    ))}
  </div>
);

const mapStateToProps = state => ({
  alerts: state.alerts
});

const mapDispatchToProps = dispatch => ({
  onFireAlert: (a, id) => dispatch(fireAlert(a, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
