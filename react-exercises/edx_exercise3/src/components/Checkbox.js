import React from 'react';

function Checkbox(props) {
  return (
    <div>
      <input type="checkbox" checked={props.checked} name={props.name} onChange={props.handleCheckbox} />
      <span>{props.title}</span>
    </div>

  )
}

export default Checkbox;
