import React from "react";
import { connect } from "react-redux";
import { fetchAllStreams } from "redux/actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchAllStreams();
  }

  render() {
    return <div>StreamList</div>;
  }
}

const mapStateToProps = state => ({ streams: state.streams });

export default connect(
  mapStateToProps,
  { fetchAllStreams }
)(StreamList);
