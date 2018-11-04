import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from 'redux/actions/weatherActions';

import SearchBar from 'components/App/Header/SearchBar';
import Nav from 'components/App/Header/Nav';

const Header = props => {
  console.log(props.weather);
  const cityName = props.weather.city ? props.weather.city.name : '';
  return (
    <header>
      <h3>Weather forecast for {cityName}</h3>
      <Nav />
      <SearchBar city={cityName} />
    </header>
  );
}

const mapStateToProps = ({ weather }) => weather;

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchWeather }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
