import React from "react";
import PropTypes from "prop-types";
import "./Square.css";

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: this.props.initialColor,
      isHidden: false,
      x: 0,
      y: 0
    };
    this.squareRef = null;
  }

  setCurrentColor(currentColor) {
    this.setState({ currentColor });
  }

  toggleVisibility = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };

  updateCoords = e => {
    const { clientX, clientY } = e;
    const { top, left } = this.squareRef.getBoundingClientRect();
    this.setState({
      x: clientX - top,
      y: clientY - left
    });
  };

  reset = () => {
    this.setState({ x: 0, y: 0 });
  };

  render() {
    let textInput;
    const size = `${this.props.size}px`;
    const style = {
      backgroundColor: this.state.currentColor,
      width: size,
      height: size,
      display: this.state.isHidden ? "none" : "block"
    };
    return (
      <div className="square-container">
        <div
          className="square"
          style={style}
          onMouseMove={this.updateCoords}
          onMouseLeave={this.reset}
          ref={el => (this.squareRef = el)}
        >
          {`${this.state.x}, ${this.state.y}`}
        </div>
        <div className="square-controls">
          <input
            type="text"
            placeholder="Color..."
            ref={el => (textInput = el)}
          />
          <button onClick={() => this.setCurrentColor(textInput.value)}>
            OK
          </button>
          <button onClick={this.toggleVisibility}>
            {this.state.isHidden ? "Show" : "Hide"}
          </button>
        </div>
        <div className="clear" />
      </div>
    );
  }
}

Square.defaultProps = {
  initialColor: "blue",
  size: 100,
  initialIsHidden: false
};

Square.propTypes = {
  initialColor: PropTypes.string,
  size: PropTypes.number,
  initialIsHidden: PropTypes.bool
};
