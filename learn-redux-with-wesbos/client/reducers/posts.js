/*
  a reducer takes in two things:
  1. the action (info about what happened)
  2. copy of current state

  reducer actually does the editing of the state

  whenever we fire an action every single reducer is going to run
  that's why we see console.logs from all th reducers after dispatching any action
  it's only up to the reducer whether it chooses to act on that action or not

  so we need to write logic inside of the reducers that says: if this is a type of action I'm intersted in, then do sth
  otherwise we're just going to return state - and nothing is going to happen
*/

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      console.log('Incrementing likes!');
      // return a new array of posts with the one we're interested in with likes incremented by 1
      const i = action.index;
      return [
        ...state.slice(0, i), // before the one we're updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), // after the one we're updating
      ]
    default:
      return state;
  }
}

export default posts;
