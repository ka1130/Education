import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "components/SearchBar";
import VideoDetail from "components/VideoDetail";
import VideoList from "components/VideoList";
import "./App.css";

const fetchVideos = term => {
  const [videos, setVideos] = useState();

  useEffect(
    () => {
      (async term => {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`,
          {
            params: {
              q: term,
              part: "snippet",
              maxResults: 5,
              key: process.env.REACT_APP_YT_API_KEY
            }
          }
        );
        setVideos(response.data.items);
      })(term);
    },
    [term]
  );
  return videos;
};

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
