import React from "react";
import { connect } from "react-redux";
import { hideGiphy } from "actions/giphy-display";
import Navigation from "components/Navigation";
import GiphyDisplay from "components/GiphyDisplay";
import styles from "./App.css";

const App = ({ children, hideGiphy, isShown, giphy }) => {
  return (
    <div>
      <h1 className={styles.header}>Giphy Master</h1>
      <Navigation />
      {children}
      <GiphyDisplay
        isShown={isShown}
        onClick={() => hideGiphy()}
        giphy={giphy}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  giphy: state.giphyDisplay.giphy,
  isShown: state.giphyDisplay.isShown
});

export default connect(
  mapStateToProps,
  { hideGiphy }
)(App);
