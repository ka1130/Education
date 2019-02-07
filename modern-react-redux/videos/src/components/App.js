import React from "react";
import SearchBar from "components/SearchBar";
import VideoDetail from "components/VideoDetail";
import VideoList from "components/VideoList";
import "./App.css";

class App extends React.Component {
  onSearch = term => {
    console.log(term);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearch={this.onSearch} />
        <div className="video-content">
          <VideoDetail />
          <VideoList />
        </div>
      </div>
    );
  }
}

export default App;
