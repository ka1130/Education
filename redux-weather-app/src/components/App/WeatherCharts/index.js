import React, { Component } from 'react';
import { v4 } from 'node-uuid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from 'redux/actions/weatherActions';
import findUserLocation from 'helpers/findUserLocation';

import Chart from 'components/App/WeatherCharts/Chart';
import Spinner from 'components/App/Spinner';

class WeatherCharts extends Component {
  componentDidMount() {
    findUserLocation.then(location => this.props.fetchWeather(location));
  }

  renderWeather = (data) => {
    const temps = data.list.map(weather => Math.trunc(weather.main.temp - 273.15));
    const pressures = data.list.map(weather => weather.main.pressure);
    const humidities = data.list.map(weather => weather.main.humidity);

    return (
      <tr key={v4()}>
        <td><Chart data={temps} color="orange" units="°C" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    );
  }

  render() {
    if (!this.props.weather.list) {
      return <Spinner />;
    }

    return (
      <table className="table">
        <thead className="has-background-light">
          <tr>
            <th>Temperature</th>
            <th>Pressure </th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.renderWeather(this.props.weather)}
        </tbody>
      </table>
    );
  };
}

const mapStateToProps = ({ weather }) => weather;

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchWeather }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCharts);
