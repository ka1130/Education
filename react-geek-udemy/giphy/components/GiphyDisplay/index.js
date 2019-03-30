import React from "react";
import classNames from "classnames";

import styles from "./GiphyDisplay.css";

const GiphyDisplay = ({ isShown, giphy, onClick }) => {
  const containerClassNames = classNames(styles.container, {
    [styles.isShown]: isShown
  });
  return (
    <div onClick={onClick} className={containerClassNames}>
      <img src={giphy ? giphy.full : ""} />
    </div>
  );
};

export default GiphyDisplay;
