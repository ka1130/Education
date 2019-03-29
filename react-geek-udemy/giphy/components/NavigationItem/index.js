import React from "react";
import styles from "./NavigationItem.css";
import classNames from "classnames";

const NavigationItem = ({ path, onClick, children, isCurrent }) => {
  const containerClassNames = classNames(styles.container, {
    [styles.selected]: isCurrent
  });

  return (
    <div className={containerClassNames}>
      <a
        className={styles.link}
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
