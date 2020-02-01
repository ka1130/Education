import React from "react";
import uuidv4 from "uuid/v4";
import { connect } from "react-redux";
import { fireAlert } from "redux/actions/alerts";

const buttons = [
  { type: "oops" },
  { type: "you messed up" },
  { type: "all is fine" }
];

const Buttons = ({ onFireAlert }) => (
  <div>
    {buttons.map(button => (
      <button key={uuidv4()} onClick={onFireAlert}>
        {button.type}
      </button>
    ))}
  </div>
);

const mapDispatchToProps = dispatch => ({
  onFireAlert: () => dispatch(fireAlert())
});

export default connect(null, mapDispatchToProps)(Buttons);
