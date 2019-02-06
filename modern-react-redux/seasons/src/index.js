import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const App = () => {
  const [lat, setLat] = useState(null);
  const [err, setErr] = useState('');

  const fetchLocation = async () => {
    const response = await window.navigator.geolocation.getCurrentPosition(
      pos => setLat(pos.coords.latitude),
      err => setErr(err.message)
    );

    return response;
  }

  useEffect(() => {
    fetchLocation();
  }, [lat, err]);

  const renderContent = () => {
    if (err && !lat) return <div>Error: {err}</div>;
    if (!err && lat) return <SeasonDisplay lat={lat} />
    return <Spinner message="Please accept location request" />;
  }

  return (
    <div className="border red">{renderContent()}</div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));
