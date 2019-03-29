import React from "react";
import styles from "./NavigationItem.css";

const NavigationItem = ({ path, onClick, children }) => {
  return (
    <div>
      <a
        href={path}
        onClick={e => {
          e.preventDefault();
          onClick(path);
        }}
      >
        {children}
      </a>
    </div>
  );
};

export default NavigationItem;
