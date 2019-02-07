import React from "react";
import axios from "axios";
import SearchBar from "components/SearchBar";
import VideoDetail from "components/VideoDetail";
import VideoList from "components/VideoList";
import "./App.css";

class App extends React.Component {
  state = { videos: [], video: null, term: "cats" };

  async componentDidMount() {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search`,
      {
        params: {
          q: this.state.term,
          part: "snippet",
          maxResults: 5,
          key: process.env.REACT_APP_YT_API_KEY
        }
      }
    );
    this.setState({ videos: response.data.items });
  }

  onSearch = async term => {
    this.setState({ term });
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search`,
      {
        params: {
          q: this.state.term,
          part: "snippet",
          maxResults: 5,
          key: process.env.REACT_APP_YT_API_KEY
        }
      }
    );
    this.setState({ videos: response.data.items });
    console.log(this.state.videos);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearch={this.onSearch} />
        <div className="video-content">
          <VideoDetail />
          <VideoList videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;
