import {
  PERFORM_SEARCH,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  NEW_SEARCH
} from "actions/types";

export const performSearch = () => ({ type: PERFORM_SEARCH });

export const searchError = () => ({ type: SEARCH_ERROR });

export const newSearch = searchTerm => ({
  type: NEW_SEARCH,
  payload: searchTerm
});

export const searchSuccess = results => ({
  type: SEARCH_SUCCESS,
  payload: results
});
