import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchStream } from 'actions';

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  
  render() {
    if(!this.props.stream) return <div>Loading...</div>
    
    return (
      <h3>{this.props.stream.title}</h3>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id]
});

export default connect(mapStateToProps, { fetchStream })(StreamEdit);