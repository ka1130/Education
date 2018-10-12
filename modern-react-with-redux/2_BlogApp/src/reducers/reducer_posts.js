import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_POST:
      const post = action.payload.data;
      // our returned object will need to contain id of this post as a key
      const newState = { ...state };
      /*
        we already have some posts fetched so we don't want throw away everything that was fetched so far
        rather add to existing application-level state
        so we need to take all the posts we've fetched so far and include them in here - that's what ...state is doing
        => take all the objects fetched and add them to the newly returned state
        we add a new key-value pair, where the key will be the id of the post that we fetched
        and the value will be the actual post itself
        so the post that we fetched is available as action.payload.data because we're using axios and the data we care about
        is on the data property
      */
      return { ...state, [action.payload.data.id]: action.payload.data };
      /*
        [] => key interpolation: whatever the action.payload.data.id is, make a new key on this object using this value
        and set its value equal to action.payload.data
      */
      /* ES5 syntax for the same thing:
        const post = action.payload.data;
        const newState = { ...state };
        newState[post.id] = post;
        return newState;
      */

    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
      // turns array of posts into an object where key in a post's id and value is the whole post object
    case DELETE_POST:
      return _.omit(state, action.payload);
      /*
        remove the deleted post from the app's posts state
        omit says: look at the state object; if it has a key of action.payload (which is the id of the deleted post)
        then drop it, just omit it from the state object and return a new object that does not contain this key anymore
        this does not modify the existing state object, it returns a new state object
      */
      ..
    default:
      return state;
  }
}
