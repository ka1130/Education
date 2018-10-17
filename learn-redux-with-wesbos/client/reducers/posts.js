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

function posts(state=[], action) {
  console.log('The post will change');
  console.log(state, action);
  return state;
}

export default posts;
