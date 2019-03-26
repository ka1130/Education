import { SEARCH_PERFORMED, SEARCH_SUCCESS, SEARCH_ERROR } from "actions/types";

export const searchError = () => ({ type: SEARCH_ERROR });

export const searchPerformed = searchTerm => ({
  type: SEARCH_PERFORMED,
  payload: searchTerm
});

export const searchSuccess = results => ({
  type: SEARCH_SUCCESS,
  payload: results
});
