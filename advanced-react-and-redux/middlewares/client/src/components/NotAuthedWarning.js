import React from "react";
import Modal from "components/Modal";
import { Link } from "react-router-dom";
import history from "../history";

class NotAuthedWarning extends React.Component {
  renderActions() {
    return (
      <React.Fragment>
        <Link to="/login" className="ui button primary">
          Login
        </Link>
        {/* ^redirect to login */}
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  render() {
    return (
      <Modal
        title="Not Authed"
        content="You're not signed in"
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

export default NotAuthedWarning;
