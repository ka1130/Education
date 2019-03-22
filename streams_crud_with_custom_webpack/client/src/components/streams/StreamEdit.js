import React from "react";
import { connect } from "react-redux";
import { fetchAllStreams } from "redux/actions";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchAllStreams();
  }
  render() {
    const { stream } = this.props;
    if (!stream) {
      return <p>Loading...</p>;
    }
    return <div>{stream.title}</div>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id]
});

export default connect(
  mapStateToProps,
  { fetchAllStreams }
)(StreamEdit);
