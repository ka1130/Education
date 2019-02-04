import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from 'actions';

import StreamForm from 'components/streams/StreamForm';

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    console.log(formValues);
  }
  
  render() {
    if (!this.props.stream) return <div>Loading...</div>

    return (
      <div>
        <h3>{this.props.stream.title}</h3>
        <StreamForm initialValues={this.props.stream} onSubmit={this.onSubmit}/>
        {/* this prop has to be calles initialValues as per redux-form docs */}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id]
});

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);