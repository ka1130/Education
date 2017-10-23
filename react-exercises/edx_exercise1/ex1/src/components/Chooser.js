import React from 'react';

import Checkbox from './Checkbox';
import Selector from './Selector';

function Chooser(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <Checkbox title="New Only"/>
      <Selector title="Select Type"/>
    </div>
  )
}

export default Chooser;
