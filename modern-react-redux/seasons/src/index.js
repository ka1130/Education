import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const App = () => {
  const [lat, setLat] = useState(null);
  const [err, setErr] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      pos => setLat(pos.coords.latitude),
      err => setErr(err.message)
    );

  }, []);
  // ^ We didn'd have componentDidUpdate method so we pass an [] 
  // because we only want to call useEffect one time, upon rendering

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
