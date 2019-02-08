import React, { useState, useEffect } from "react";
import fetchVideos from "helpers/fetchVideos";
import SearchBar from "components/App/SearchBar";
import VideoDetail from "components/App/VideoDetail";
import VideoList from "components/App/VideoList";
import "./App.css";

const App = () => {
  const [term, setTerm] = useState("cats");
  let videos = fetchVideos(term);
  const [selectedVideo, setSelectedVideo] = useState("");

  useEffect(
    () => {
      setSelectedVideo(videos ? videos[0].id.videoId : "");
    },
    [videos]
  );

  const onSearch = term => {
    setTerm(term);
  };

  const selectVideo = videoId => {
    setSelectedVideo(videoId);
  };

  return (
    <div className="ui container">
      <SearchBar onSearch={onSearch} />
      <div className="video-content">
        <VideoDetail selectedVideo={selectedVideo} />
        <VideoList videos={videos} selectVideo={selectVideo} />
      </div>
    </div>
  );
};

export default App;
