import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube",
  params: {
    part: "snippet",
    maxResults: 5,
    key: process.env.REACT_APP_YT_API_KEY
  }
});
