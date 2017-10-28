import React, { Component } from 'react';

class Description extends Component {
  render() {
    return (
        <div className="description">
          <div className="id">{this.props.id}:&nbsp;</div>
          <div>{this.props.description}</div>
          <button className="button-show" onClick="">show gist</button>
        </div>
      );
  }
}

export default Description;
