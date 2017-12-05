import React from 'react';

function Checkbox(props) {
  return (
    <div>
      {props.title}
      <input type="checkbox" checked />
    </div>
  )
}

export default Checkbox;
