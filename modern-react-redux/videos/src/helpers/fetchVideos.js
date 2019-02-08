import { useState, useEffect } from "react";
import yt from "api/yt";

export default term => {
  const [videos, setVideos] = useState();

  useEffect(
    () => {
      (async term => {
        const response = await yt.get("/v3/search", {
          params: {
            q: term
          }
        });
        setVideos(response.data.items);
      })(term);
    },
    [term]
  );
  return videos;
};
