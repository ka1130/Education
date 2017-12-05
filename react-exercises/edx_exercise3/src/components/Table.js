import React from 'react';

import TableHeader from './TableHeader';
import TableRow from './TableRow';

const Table = props => (
    <table className="table">
      <tbody>
        <TableHeader />
        {props.items.map((item, index) =>
          <TableRow
            key={index}
            firstName={item.firstName}
            lastName={item.lastName}
            activity={item.activity}
            restrictions={Object.keys(item.restrictions).filter(key => item.restrictions[key])}
            removeItem={props.removeItem}
            id={index}/>
          )
        }
      </tbody>
    </table>
  )

export default Table;
