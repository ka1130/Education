import React from "react";
import YouTube from "react-youtube";
import "./VideoItem.css";

class VideoItem extends React.Component {
  selectVideo(id) {
    this.props.selectVideo(id);
  }

  render() {
    const opts = {
      origin: "https://localhost:3000",
      playerVars: {
        autoplay: 0
      }
    };

    return (
      <div>
        <YouTube
          videoId={this.props.video.id.videoId}
          opts={opts}
          className="videoItem"
        />
        <button onClick={() => this.selectVideo(this.props.video.id.videoId)}>
          Select video
        </button>
      </div>
    );
  }
}

export default VideoItem;
