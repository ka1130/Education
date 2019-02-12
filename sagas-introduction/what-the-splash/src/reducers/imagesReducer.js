import { IMAGES } from '../constants';

export default function imagesReducer(state = [], action) {
  if (action.type === IMAGES.LOAD_SUCCESS) {
    return [...state, ...action.images];
  }
  return state;
}