import React from "react";
import YouTube from "react-youtube";
import "./VideoItem.css";

const VideoItem = props => {
  const selectVideo = id => {
    props.selectVideo(id);
  };

  const opts = {
    origin: "https://localhost:3000",
    playerVars: {
      autoplay: 0
    }
  };

  return (
    <div>
      <YouTube
        videoId={props.video.id.videoId}
        opts={opts}
        className="videoItem"
      />
      <button onClick={() => selectVideo(props.video.id.videoId)}>
        Select video
      </button>
    </div>
  );
};

export default VideoItem;
