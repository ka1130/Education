import {
  PERFORM_SEARCH,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  NEW_SEARCH
} from "actions/types";
import { LOCATION_CHANGE } from "connected-react-router";

const initialState = {
  results: [],
  currentOffset: 0,
  searchTerm: null,
  isLoading: false,
  isActive: false
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
        isLoading: false,
        isActive: action.payload.length === 50
        // if it's less then results are exhausted, there are no more images
        // and we should disactivate the infinite scroll
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
    case LOCATION_CHANGE:
      return initialState;
    default:
      return state;
  }
};
