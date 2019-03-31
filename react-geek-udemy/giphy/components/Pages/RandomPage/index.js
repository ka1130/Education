import React from "react";
import { connect } from "react-redux";
import { getRandomGiphy } from "actions/random";
import { showGiphy } from "actions/giphy-display";
import styles from "./RandomPage.css";

class RandomPage extends React.Component {
  componentDidMount() {
    this.props.getRandomGiphy();
  }

  render() {
    const { getRandomGiphy, randomGiphy, showGiphy } = this.props;
    const imgUrl = randomGiphy ? randomGiphy.thumbnail : "";
    return (
      <div className={styles.container}>
        <button className={styles.button} onClick={getRandomGiphy}>
          Next Giphy
        </button>
        <img src={imgUrl} onClick={() => showGiphy(randomGiphy)} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ randomGiphy: state.randomGiphy });

export default connect(
  mapStateToProps,
  { getRandomGiphy, showGiphy }
)(RandomPage);
