import tv4 from "tv4";
import stateSchema from "./stateSchema";

export default ({ dispatch, getState }) => next => action => {
  console.log(getState());
  next(action);
  console.log(tv4.validate(getState(), stateSchema));
};
