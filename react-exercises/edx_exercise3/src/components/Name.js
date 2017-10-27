import React from 'react'

const Name = props => (
    <div className="name">
      <label>{props.label}</label>
      <input type="text" name={props.name} onChange={props.handleChange} />
    </div>
  )

export default Name;
