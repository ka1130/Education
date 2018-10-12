import React, { Component } from 'react';

// we have Google Maps integrated in out index.html <script> tag so we can start to use it right away
// in our console we can already type 'google.maps' and get its object
class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render() {
    return <div ref="map" />;
    // ref to get direct HTML reference to an element that has been rendered on the page
    // this.refs.map -> that's how e can refer to it
  }
}

export default GoogleMap;
