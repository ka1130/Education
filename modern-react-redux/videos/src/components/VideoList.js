import React from "react";
import "./VideoList.css";
import VideoItem from "components/VideoItem";

const VideoList = props => {
  return (
    <div className="ui list video-list">
      {props.videos.map(video => (
        <div className="" key={video.id.videoId}>
          <VideoItem video={video} selectVideo={props.selectVideo} />
        </div>
      ))}
    </div>
  );
};

export default VideoList;
