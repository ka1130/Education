import React from "react";
import "./VideoList.css";
import VideoItem from "components/App/VideoList/VideoItem";

const VideoList = props => {
  const videos = props.videos ? props.videos : [];
  return (
    <div className="ui list video-list">
      {videos.map(video => (
        <div className="" key={video.id.videoId}>
          <VideoItem video={video} selectVideo={props.selectVideo} />
        </div>
      ))}
    </div>
  );
};

export default VideoList;
