import React from "react";
import "./index.css";

export default ({ item, selected, onSelect, onDeselect }) => {
  return (
    <div
      className={`enhanced-checkbox-container ${selected ? "selected" : ""}`}
    >
      <input
        type="checkbox"
        name={item.label}
        value={item.value}
        id={item.id}
        checked={selected}
        onChange={selected ? onDeselect : onSelect}
      />
      <label>{item.label}</label>
    </div>
  );
};
