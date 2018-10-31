import React, { Component } from 'react';
import styles from './WeatherList.module.scss';
import 'bulma/css/bulma.css'

class WeatherList extends Component {
  render() {
    return (
      <>
        <h3>WeatherList</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Temperature</th>
              <th>Pressure </th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12:00</td>
              <td>13 C</td>
              <td>100 hPa</td>
              <td>65%</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  };
}

export default WeatherList;