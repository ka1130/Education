import React from "react";
import "./VideoList.css";
import VideoItem from "components/VideoItem";

const VideoList = props => {
  return (
    <div className="ui list video-list">
      {props.videos.map(video => (
        <VideoItem video={video} key={video.id.videoId} />
      ))}
    </div>
  );
};

export default VideoList;
