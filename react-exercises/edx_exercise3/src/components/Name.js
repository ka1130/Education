import React from 'react'

function Name(props) {
  const style = {
    display: "flex",
    flexDirection: "column",
    width: 200,
    marginBottom: 20
  }
  return (
    <div style={style}>
      <label>{props.label}</label>
      <input type="text" name={props.name} onChange={props.handleChange} />
    </div>
  )
}

export default Name;
