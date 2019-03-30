import { GET_RANDOM_GIPHY_SUCCESS } from "actions/types";
import { LOCATION_CHANGE } from "connected-react-router";

function transformRandomGiphyResult(rawResult) {
  const { images } = rawResult;
  return {
    full: images.original.url,
    thumbnail: images.fixed_width_downsampled.url
  };
}

export default (state = null, action) => {
  switch (action.type) {
    case GET_RANDOM_GIPHY_SUCCESS:
      console.log("GET_RANDOM_GIPHY_SUCCESS payload is", action.payload);
      return transformRandomGiphyResult(action.payload);
    case LOCATION_CHANGE:
      return null;
    default:
      return state;
  }
};
