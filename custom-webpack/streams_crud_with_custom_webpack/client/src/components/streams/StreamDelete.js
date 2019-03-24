import React from "react";
import Modal from "components/Modal";
import { connect } from "react-redux";
import { history } from "customHistory";
import { Link } from "react-router-dom";
import { fetchSingleStream, deleteStream } from "redux/actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchSingleStream(this.props.match.params.id);
  }

  renderActions() {
    const { deleteStream } = this.props;
    const { id } = this.props.match.params;
    return (
      <>
        <button className="ui negative button" onClick={() => deleteStream(id)}>
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </>
    );
  }

  renderContent() {
    const { stream } = this.props;
    if (!stream) {
      return "Are you sure you want to delete this stream?";
    }

    return `Are you sure you want to delete the stream with the title of ${
      stream.title
    }?`;
  }

  render() {
    return (
      <Modal
        title="Delete stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => {
          history.push("/");
        }}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id]
});

export default connect(
  mapStateToProps,
  { fetchSingleStream, deleteStream }
)(StreamDelete);
