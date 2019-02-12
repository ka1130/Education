import React, { Component } from "react";
import { loadImages } from "../../actions";
import { connect } from "react-redux";

import "./styles.css";

const key = "5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02";

class ImageGrid extends Component {
  componentDidMount() {
    this.props.loadImages();
  }

  render() {
    const { images, error } = this.props;
    return (
      <div className="content">
        <section className="grid">
          {images.map(image => (
            <div
              key={image.id}
              className={`item item-${Math.ceil(image.height / image.width)}`}
            >
              <img src={image.urls.small} alt={image.user.username} />
            </div>
          ))}
          <button onClick={this.props.loadImages}>Load images</button>
        </section>
        {error && <div className="error">{JSON.stringify(error)}</div>}
      </div>
    );
  }
}

const mapStateToProps = ({ isLoading, images, error }) => ({
  isLoading,
  images,
  error
});

export default connect(
  mapStateToProps,
  { loadImages }
)(ImageGrid);
