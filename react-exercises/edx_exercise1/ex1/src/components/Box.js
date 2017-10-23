import React from 'react';

import Row from './Row';

function Box(props) {
  return(
    <div>
      <h2>{props.title}</h2>
      {props.type.map( element => <Row year={element.year} model={element.model} price={element.price} />)}
    </div>
  )
}

export default Box;
