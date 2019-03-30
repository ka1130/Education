import {
  PERFORM_SEARCH,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  NEW_SEARCH
} from "actions/types";

const initialState = {
  results: [],
  currentOffset: 0,
  searchTerm: null,
  isLoading: false
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
      return {
        ...state,
        currentOffset: state.currentOffset + 50,
        results: [
          ...state.results,
          ...action.payload.map(searchResultsTransformer)
        ],
        isLoading: false
      };
    case NEW_SEARCH:
      return {
        ...state,
        results: [],
        currentOffset: 0,
        searchTerm: action.payload
        // isLoading: false
      };
    case PERFORM_SEARCH:
      return {
        ...state,
        isLoading: true
      };
    case SEARCH_ERROR:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
