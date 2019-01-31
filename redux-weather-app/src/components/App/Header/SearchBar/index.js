import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from 'redux/actions/weatherActions';

class SearchBar extends Component {
  state = { city: '' }

  onInputChange = e => {
    this.setState({ city: e.target.value });
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.fetchWeather(this.state.city);
    this.setState({ city: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <label htmlFor="city">Change city: </label>
        <input
          type="text"
          id="city"
          value={this.state.city}
          placeholder={this.props.city}
          onChange={this.onInputChange}
        />
        <button type="submit" onClick={this.onFormSubmit}>></button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state.weather
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
