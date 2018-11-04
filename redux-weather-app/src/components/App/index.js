import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from 'redux/actions/weatherActions';
import findUserLocation from 'helpers/findUserLocation';

import Spinner from 'components/App/Spinner';
import WeatherList from 'components/App/WeatherList';

class App extends Component {
  componentDidMount() {
    findUserLocation.then(location => this.props.fetchWeather(location));
  }

  render() {
    const { error, loading, weather } = this.props;

    if (error) {
      return <p>{error.message}</p>;
    }
    
    return (
      <section className="section">
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
