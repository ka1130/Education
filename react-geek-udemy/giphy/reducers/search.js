import { SEARCH_PERFORMED, SEARCH_SUCCESS, SEARCH_ERROR } from "actions/types";

const initialState = {
  results: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return { ...state, results: action.payload };
    default:
      return state;
  }
};
