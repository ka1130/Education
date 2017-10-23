import React from 'react';

function Row(props) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Year</th>
          <th>Model</th>
          <th>Price</th>
          <th>Buy</th>
        </tr>
        <tr>
          <td>{props.year}</td>
          <td>{props.model}</td>
          <td>{props.price}</td>
          <td>
            <button>Buy Now</button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Row;
