import { FIRE_ALERT } from "redux/actions/types";

export const fireAlert = alert => ({
  type: FIRE_ALERT,
  payload: alert
});
