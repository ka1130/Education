import React from 'react';

function TableHeader(props) {
  return (
    <tr>
      <th className="table-text">Remove</th>
      <th className="table-text">First Name</th>
      <th className="table-text">Last Name</th>
      <th className="table-text">Activity</th>
      <th className="table-text">Restrictions</th>
    </tr>
  )
}

export default TableHeader;
