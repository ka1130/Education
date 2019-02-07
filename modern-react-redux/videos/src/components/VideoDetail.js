import React from "react";
import YouTube from "react-youtube";
import "./VideoDetail.css";

class VideoDetail extends React.Component {
  state = { selectedVideo: null };

  componentDidUpdate(prevProps) {
    if (prevProps.selectedVideo !== this.props.selectedVideo) {
      this.setState({ selectedVideo: this.props.selectedVideo });
    }
  }

  render() {
    const opts = {
      origin: "https://localhost:3000",
      playerVars: {
        autoplay: 0
      }
    };

    let videoId;
    if (this.props.selectedVideo) {
      videoId = this.props.selectedVideo;
    } else {
      videoId = "";
    }

    return (
      <div className="video-detail">
        <YouTube videoId={videoId} opts={opts} />
      </div>
    );
  }
}

export default VideoDetail;
