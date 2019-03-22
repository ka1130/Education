import React from "react";
import { connect } from "react-redux";
import { fetchSingleStream, editStream } from "redux/actions";
import StreamForm from "components/streams/StreamForm";
import _ from "lodash";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchSingleStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    console.log(formValues);
    this.props.editStream(this.props.match.params.id, formValues);
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
          initialValues={_.pick(this.props.stream, "title", "description")}
          /* initialValues={{
            title: stream.title,
            description: stream.description
          }}
          this keys map to Field name="title"/"description"
          from the StreamForm */
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
