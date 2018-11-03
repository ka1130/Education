import React, { Component } from 'react';
// import Geocode from 'react-geocode';
import { v4 } from 'node-uuid';
import Spinner from 'components/App/Spinner';
import 'bulma/css/bulma.css'

class WeatherList extends Component {
  // componentDidMount() {
    
  //   Geocode.setApiKey("AIzaSyDY5kZJmnORrvm1IODYBdB4sYjTOt6_maQ");
 
  //   // Get address from latidude & longitude.
  //   Geocode.fromLatLng("21", "53").then(
  //     response => {
  //       const address = response.results[0].formatted_address;
  //       console.log(address);
  //     },
  //     error => {
  //       console.error(error);
  //     }
  //   );
  // }

  renderWeather = (day) => {
    return (
      <tr key={v4()}>
        <td>{day.dt_txt}</td>
        <td>{(day.main.temp - 273.15).toFixed(2)} °C</td>
        <td>{day.main.pressure} hPa</td>
        <td>{day.main.humidity}%</td>
      </tr>
    );
  }

  render() {
    if (!this.props.weather.list) {
      return <Spinner />;
    }

    return (
      <>
        <table className="table">
          <thead className="has-background-light">
            <tr>
              <th>Time</th>
              <th>Temperature</th>
              <th>Pressure </th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.list.map(this.renderWeather)}
          </tbody>
        </table>
      </>
    );
  };
}

export default WeatherList;