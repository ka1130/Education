import React from 'react';
import TableText from './TableText';

function TableRow(props) {
  return (
    <tr>
      <td className="button-remove"><button>x</button></td>
      <td><TableText text="John"/></td>
      <td><TableText text="Smith"/></td>
      <td><TableText text="Cooking"/></td>
      <td><TableText text="c"/></td>
    </tr>
  )
}

export default TableRow;
