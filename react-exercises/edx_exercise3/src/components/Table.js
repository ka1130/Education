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
            restrictions={`Dietary Restrictions: ${item.dietaryRestrictions},
                          Physical Disabilities: ${item.physicalDisabilities},
                          Medical Needs: ${item.medicalNeeds}`}
            removeItem={props.removeItem}
            id={index}
          />)
        }
      </tbody>
    </table>
  )

export default Table;
