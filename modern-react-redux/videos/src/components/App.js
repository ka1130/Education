import React from "react";
import axios from "axios";
import SearchBar from "components/SearchBar";
import VideoDetail from "components/VideoDetail";
import VideoList from "components/VideoList";
import "./App.css";

class App extends React.Component {
  state = { videos: [], selectedVideo: null, term: "cats" };

  fetchVideos = async term => {
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
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
    console.log(this.state);
  };

  componentDidMount() {
    this.fetchVideos(this.state.term);
  }

  onSearch = term => {
    this.setState({ term });
    this.fetchVideos(this.state.term);
  };

  selectVideo = id => this.setState({ selectedVideo: id });

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearch={this.onSearch} />
        <div className="video-content">
          <VideoDetail selectedVideo={this.state.selectedVideo} />
          <VideoList
            videos={this.state.videos}
            selectVideo={this.selectVideo}
          />
        </div>
      </div>
    );
  }
}

export default App;
