function postComments(state=[], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      // return a copy of the existing state + the new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      // we need to return a copy of the state without this comment
      return [
        // from the start to the one we want to delete
        ...state.slice(0, action.i),
        // omitting the deleted action
        ...state.slice(action.i + 1) 
        // we're not passing the second argument so we want the rest of the array, to the end
      ];
    default:
      return state;
  }
}

// Reducer composition pattern => see the documentation
function comments(state=[], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      // key of the object will be a variable
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
