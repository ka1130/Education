import { SEARCH_PERFORMED, SEARCH_SUCCESS, SEARCH_ERROR } from "actions/types";

const initialState = {
  results: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
