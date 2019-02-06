import { useState, useEffect } from 'react';

const useLocation = () => {
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

  return [lat, err];
}

export default useLocation;
