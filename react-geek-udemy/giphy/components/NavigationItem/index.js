import React from "react";

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
