import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from 'redux/actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchWeather();
  }

  render() {
    const city = this.props.city ? this.props.city.name : ''
    return (
      <div>
        <h3>{city}</h3>
        <h5>Weather forecast:</h5>
        {/* <button onClick={this.props.fetchWeather}>Fetch weather</button> */}
        {/* <ul>{this.renderHourlyWeather()}</ul> */}
      </div>
    );
  }
}


const mapStateToProps = ({ weather }) => weather;

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchWeather }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
