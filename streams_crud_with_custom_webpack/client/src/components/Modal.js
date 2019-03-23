import React from "react";
import ReactDOM from "react-dom";

const Modal = () =>
  ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">jjjlkj</div>
    </div>,
    document.getElementById("modal")
  );

export default Modal;
