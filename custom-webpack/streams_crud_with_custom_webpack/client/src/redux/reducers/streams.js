import _ from "lodash";
import * as constants from "redux/actions/constants";

export default (state = {}, action) => {
  switch (action.type) {
    case constants.FETCH_SINGLE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    // spread both objects and merge them to create a new one
    case constants.CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case constants.EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case constants.DELETE_STREAM:
      return _.omit(state, action.payload);
    // _.omit creates a new object
    case constants.FETCH_ALL_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};
