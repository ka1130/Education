import React from "react";
import YouTube from "react-youtube";
import "./VideoItem.css";

class VideoItem extends React.Component {
  render() {
    const opts = {
      // height: "390",
      // width: "640",
      origin: "https://localhost:3000",
      playerVars: {
        autoplay: 0
      }
    };

    return (
      <YouTube
        videoId={this.props.video.id.videoId}
        opts={opts}
        className="videoItem"
      />
    );
  }
}

export default VideoItem;
