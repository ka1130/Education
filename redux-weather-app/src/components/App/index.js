import React, { Component } from 'react';
import Geocode from 'react-geocode';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from 'redux/actions/weatherActions';

import SearchBar from 'components/App/Header/SearchBar';
import Spinner from 'components/App/Spinner';
import WeatherList from 'components/App/WeatherList';

class App extends Component {
  componentDidMount() {
    // make use of reject
    const findUserLocation = new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          resolve(position.coords);
        }, (error) => {
          if(error.code === error.PERMISSION_DENIED) {
            console.error("Error detecting location.");
          }
        });
      }
    })

    findUserLocation.then(location => this.props.fetchWeather(location));
  }

  render() {
    const { error, loading, weather } = this.props;
    const cityName = weather.city? weather.city.name : '';

    if (error) {
      return <p>{error.message}</p>;
    }
    console.log(weather);
    return (
      <section className="section">
        <SearchBar city={cityName}/>
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
