import React from 'react';

import Option from './Option';

function Selector(props) {
  return (
    <p>
      {props.title}&nbsp;
      <select>
        <Option val="All" />
        <Option val="Cars"/>
        <Option val="Trucks"/>
        <Option val="Convertibles"/>
      </select>
    </p>
  )
}

export default Selector;
