import React from 'react';
import TableText from './TableText';

const TableRow = ({removeItem, id, firstName, lastName, activity, restrictions}) => (
    <tr>
      <td className="button-remove">
        <button onClick={removeItem} id={id}>x</button>
      </td>
      <td className="table-text">
        <TableText text={firstName}/>
      </td>
      <td className="table-text">
        <TableText text={lastName}/>
      </td>
      <td className="table-text">
        <TableText text={activity}/>
      </td>
      <td className="table-text">
        <TableText text={restrictions}/>
      </td>
    </tr>
  )

export default TableRow;
