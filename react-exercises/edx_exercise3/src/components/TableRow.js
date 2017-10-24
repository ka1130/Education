import React from 'react';
import TableText from './TableText';

function TableRow(props) {
  return (
    <tr>
      <td className="button-remove">
        <button onClick={props.removeItem}>x</button>
      </td>
      <td className="table-text">
        <TableText text={props.firstName}/>
      </td>
      <td className="table-text">
        <TableText text={props.lastName}/>
      </td>
      <td className="table-text">
        <TableText text={props.activity}/>
      </td>
      <td className="table-text">
        <TableText text={props.restrictions}/>
      </td>
    </tr>
  )
}

export default TableRow;
