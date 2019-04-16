import React from "react";
import Modal from "components/UI/Modal";

const withErrorHandler = WrappedComponent => {
  return props => {
    return (
      <>
        <Modal isOpen>Something didm't work</Modal>
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default withErrorHandler;
