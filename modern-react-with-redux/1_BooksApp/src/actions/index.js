//this is a single action creator
export const selectBook = book => {
  console.log('A book has been selected', book);
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
  // this returned object is an action
  // action has to have type property and other data that desrcibes it
  // usually it has type and payload
}
// action creator is a function that returns an action
// action is an object that flows thorugh all our reducers
// reducers can then use an action to produce a different value for a particular piece of state
