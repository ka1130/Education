import React from 'react';


function Select(props) {
  return (
      <select value={props.activity} onChange={props.changeActivity}>
        <option value="Science Lab">Science Lab</option>
        <option value="Swimming">Swimming</option>
        <option value="Cooking">Cooking</option>
        <option value="Painting">Painting</option>
      </select>
  )
}

export default Select;
