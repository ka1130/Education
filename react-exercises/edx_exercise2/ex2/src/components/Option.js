import React from 'react';

function Option(props) {
  return (
    <button className="button" onClick={() => props.handleClick(props.option)}>{props.option}</button>
  )
}

export default Option;
