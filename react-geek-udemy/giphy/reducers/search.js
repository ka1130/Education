import {
  PERFORM_SEARCH,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  NEW_SEARCH
} from "actions/types";

const initialState = {
  results: [],
  currentOffset: 0,
  searchTerm: null
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
      console.log("SEARCH_SUCCESS", action.payload);
      return {
        ...state,
        currentOffset: state.currentOffset + 25,
        results: [
          ...state.results,
          ...action.payload.map(searchResultsTransformer)
        ]
      };
    case NEW_SEARCH:
      console.log("NEW_SEARCH", action.payload);
      return {
        ...state,
        results: [],
        currentOffset: 0,
        searchTerm: action.payload
      };
    default:
      return state;
  }
};
