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

  render() {
    const { lat, err } = this.state;

    if (err && !lat) return <div>Error: {err}</div>;
    if (!err && lat) return <SeasonDisplay lat={lat} />;
    
    return <Spinner message="Please accept location request" />;
  }
}

export default App;