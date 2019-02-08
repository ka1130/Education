import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import "./VideoDetail.css";

const VideoDetail = props => {
  const [selectedVideo, setSelectedVideo] = useState("");

  useEffect(() => {
    setSelectedVideo(props.selectedVideo);
  });

  const opts = {
    origin: "https://localhost:3000",
    playerVars: {
      autoplay: 0
    }
  };

  return (
    <div className="video-detail">
      <YouTube videoId={selectedVideo} opts={opts} />
    </div>
  );
};

export default VideoDetail;
