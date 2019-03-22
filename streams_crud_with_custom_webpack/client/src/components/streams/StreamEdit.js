import React from "react";
import { connect } from "react-redux";

const StreamEdit = props => {
  console.log(props.stream);
  return <div>StreamEdit</div>;
};

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id]
});

export default connect(mapStateToProps)(StreamEdit);
