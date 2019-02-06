import React from 'react';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, err: '' }

    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ err: err.message })
    );
  }

  render() {
    const { lat, err } = this.state;

    if (err && !lat) return <div>Error: {err}</div>;
    if (!err && lat) return <div>Latitude: {lat}</div>;
    
    return <div>Loading</div>;
  }
}

export default App;