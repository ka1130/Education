import React from "react";
import Backdrop from "components/UI/Backdrop";
import styles from "./Modal.module.scss";

const Modal = ({ isOpen, children, onModalClose }) => (
  <>
    <Backdrop visible={isOpen} onClick={onModalClose} />
    <div className={`${styles.modal} ${isOpen ? styles.visible : ""}`}>
      <div onClick={e => e.stopPropagation()}>{children}</div>
    </div>
  </>
);

export default React.memo(
  Modal,
  (prevProps, nextProps) =>
    prevProps.isOpen === nextProps.isOpen &&
    prevProps.children === nextProps.children
);
