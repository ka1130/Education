import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from 'actions';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();

        // dispatch some initial action when we finish initializing our library
        // to indicate whether or not the user is signed in
        // so we want to call signIn() or signOut() depending on the above condition
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return (
      <div className="item">{this.renderAuthButton()}</div>
    )
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn
})

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);