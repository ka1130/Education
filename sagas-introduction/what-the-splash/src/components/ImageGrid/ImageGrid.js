import React, { Component } from "react";
import { loadImages } from "../../actions";
import { connect } from "react-redux";

import "./styles.css";
import Button from "../Button";

class ImageGrid extends Component {
  componentDidMount() {
    this.props.loadImages();
  }

  render() {
    const { images, error, isLoading, loadImages } = this.props;
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
          {error && <div className="error">{JSON.stringify(error)}</div>}
          <Button
            onClick={() => !isLoading && loadImages()}
            loading={isLoading}
          >
            Load More
          </Button>
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
