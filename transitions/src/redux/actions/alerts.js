import { FIRE_ALERT, DISMISS_ALERT } from "redux/actions/types";

export const fireAlert = alert => ({
  type: FIRE_ALERT,
  payload: alert
});

export const dismissAlert = alert => ({
  type: DISMISS_ALERT,
  payload: alert
});
