import { FIRE_ACTION } from "redux/actions/types";

export const fireAlert = () => ({
  type: FIRE_ACTION,
  payload: "FooBar"
});
