import React from "react";
import YouTube from "react-youtube";
import "./VideoDetail.css";

class VideoDetail extends React.Component {
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
      <div className="video-detail">
        <YouTube videoId="2g811Eo7K8U" opts={opts} />
      </div>
    );
  }
}

export default VideoDetail;
