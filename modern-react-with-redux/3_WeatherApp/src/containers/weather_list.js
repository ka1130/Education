import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const { name, id } = cityData.city;
    const temps = cityData.list.map(weather => weather.main.temp); //in Kelvins
    const tempsCelsius = temps.map(temp => temp - 273);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={`${id}_${name}`}>
        {/* <td>{name}</td> */}
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={tempsCelsius} color="orange" units="℃"/></td>
        <td><Chart data={pressures} color="green" units="hPa"/></td>
        <td><Chart data={humidities} color="black" units="%"/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (℃)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => ({
  weather
  // same as weather: state.weather if we had state instead of destructured weather in the arguments
  // we are using state.weather here because we have this weather piece of state on our reducer:
  // const rootReducer = combineReducers({
  //   weather: WeatherReducer
  // });
});

export default connect(mapStateToProps)(WeatherList);
