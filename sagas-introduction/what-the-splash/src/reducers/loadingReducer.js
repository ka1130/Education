import { IMAGES } from '../constants';

export default function loadingReducer(state=false, action) {
  switch (action.type) {
    case IMAGES.LOAD:
      return true;
    case IMAGES.LOAD_SUCCESS:
      return false;
    case IMAGES.LOAD_FAIL:
      return false;
      
    default:
      return state;
  }
}