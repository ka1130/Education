import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import "./VideoDetail.css";

const VideoDetail = props => {
  const [selectedVideo, setSelectedVideo] = useState(props.selectedVideo);

  useEffect(() => {
    setSelectedVideo(props.selectedVideo);
  });

  const opts = {
    origin: "https://localhost:3000",
    playerVars: {
      autoplay: 0
    }
  };

  let videoId;
  if (selectedVideo) {
    videoId = selectedVideo;
  } else {
    videoId = "";
  }

  return (
    <div className="video-detail">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default VideoDetail;
