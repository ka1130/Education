import React, { Component } from 'react';

class Description extends Component {
  render() {
    return (
        <div className="description">
          <div>{this.props.id}:&nbsp;</div>
          <div>{this.props.description}description</div>
        </div>
      );
  }
}

export default Description;
