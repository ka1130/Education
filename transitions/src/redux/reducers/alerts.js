import { FIRE_ACTION } from "redux/actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FIRE_ACTION:
      return [{ type: "foo" }];
    default:
      return state;
  }
};
