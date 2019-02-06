import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = { lat: null, err: '' }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ err: err.message })
    );
  }

  renderContent() {
    const { lat, err } = this.state;
    if (err && !lat) {
      return `Error: {err.message}`;
    } else if (!err && lat) {
      return <SeasonDisplay lat={lat} />;
    } else {
      return <Spinner message="Please accept location request" />;    
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default App;