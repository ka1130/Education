import React from "react";
import ReactDOM from "react-dom";
import { history } from "customHistory";

const Modal = () =>
  ReactDOM.createPortal(
    <div
      onClick={() => {
        history.push("/");
      }}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">Delete stream</div>
        <div className="content">Are you sure?</div>
        <div className="actions">
          <button className="ui primary button">Delete</button>
          <button className="ui button">Cancel</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );

export default Modal;
