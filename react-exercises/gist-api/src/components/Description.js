import React from 'react';

const Description = props => {
  return (
      <div className="description">
        <div className="id">{props.id}:&nbsp;</div>
        <div>{props.description}</div>
        <button className="button-show" onClick={props.showGist} id={props.id}>show gist</button>
      </div>
    );
}

export default Description;
