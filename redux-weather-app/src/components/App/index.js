import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from 'redux/actions';

import Spinner from 'components/App/Spinner';
import WeatherList from 'components/App/WeatherList';

class App extends Component {
  componentDidMount() {
    this.props.fetchWeather();
  }

  render() {
    const { error, loading, weather } = this.props;
    const city = 'Warsaw' // replace with dynamic city name

    if (error) {
      return <p>{error.message}</p>;
    }

    return (
      <section className="section">
        <h2 className="title">Your weather for {city}</h2>
        {
          loading
          ? <Spinner />
          : <WeatherList weather={weather}/>
        }
      </section>
    );
  }
}

const mapStateToProps = ({ weather }) => weather;

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchWeather }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
