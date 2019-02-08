export default ({ dispatch }) => next => action => {
  // check if the action has a promise on its payload prop
  // if it does, then wait for it to resolve, if it doesn't,
  // send it on to the next middleware
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  // wait for the promise to resolve and then create a new object
  // with data from resolved promise and dispatch this action
  action.payload.then(response => {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
// the above is a series of three functions that return each other
// next arg is a reference to a potential next middleware on our chain
// action arg is the very action that passes thorugh our middleware
