import { IMAGES } from "../constants";

export default function pageReducer(state = 1, action) {
  if (action.type === IMAGES.LOAD_SUCCESS) {
    return state + 1;
  }
  return state;
}
