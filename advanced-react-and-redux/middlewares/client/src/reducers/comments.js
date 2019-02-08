import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      console.log(action.payload);
      return [...state, action.payload];
    case FETCH_COMMENTS:
      const comments = action.payload.map(comment => comment.title);
      return [...comments];
    default:
      return state;
  }
}
