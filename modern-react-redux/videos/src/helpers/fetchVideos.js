import { useState, useEffect } from "react";
import axios from "axios";

export default term => {
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
