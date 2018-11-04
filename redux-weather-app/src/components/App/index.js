import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from 'redux/actions/weatherActions';

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
