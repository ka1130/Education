import React from "react";
import { connect } from "react-redux";
import { fetchSingleStream, editStream } from "redux/actions";
import StreamForm from "components/streams/StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchSingleStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    console.log(formValues);
    // this.props.editStream(formValues);
  };

  render() {
    const { stream } = this.props;
    if (!stream) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={{
            title: stream.title,
            description: stream.description
          }}
        />
        {/* ^ this prop has to be called initialValues */}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id]
});

export default connect(
  mapStateToProps,
  { fetchSingleStream, editStream }
)(StreamEdit);
