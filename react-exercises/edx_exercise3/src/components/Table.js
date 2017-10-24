import React from 'react';

import TableHeader from './TableHeader';
import TableRow from './TableRow';

function Table(props) {
  return (
    <table className="table">
      <TableHeader />
      <TableRow />
    </table>
  )
}

export default Table;
