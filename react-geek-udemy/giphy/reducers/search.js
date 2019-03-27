import { SEARCH_PERFORMED, SEARCH_SUCCESS, SEARCH_ERROR } from "actions/types";

const initialState = {
  results: []
};

function searchResultsTransformer(rawResult) {
  const { images } = rawResult;
  return {
    thumbnail: images.fixed_height_small_still.url,
    full: images.original.url
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      console.log("action.payload", action.payload);
      return {
        ...state,
        results: action.payload.map(searchResultsTransformer)
      };
    default:
      return state;
  }
};
