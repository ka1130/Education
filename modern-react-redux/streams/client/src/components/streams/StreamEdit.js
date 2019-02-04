import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchStream, editStream } from 'actions';

import StreamForm from 'components/streams/StreamForm';

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  }
  
  render() {
    if (!this.props.stream) return <div>Loading...</div>

    return (
      <div>
        <h3>{this.props.stream.title}</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
        {/* this prop has to be calles initialValues as per redux-form docs */}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id]
});

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);