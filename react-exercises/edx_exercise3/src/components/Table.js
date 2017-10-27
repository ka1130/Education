import React from 'react';

import TableHeader from './TableHeader';
import TableRow from './TableRow';

function Table(props) {
  return (
    <table className="table">
      <tbody>
        <TableHeader />
        {/* {props.items.map(item => console.log(item))} */}
        {props.items.map((item, index) =>
          <TableRow
            key={index}
            firstName={item.firstName}
            lastName={item.lastName}
            activity={item.activity}
            restrictions={item.restrictions}
            removeItem={props.removeItem}
            id={index}
          />)
        }
      </tbody>
    </table>
  )
}

export default Table;
