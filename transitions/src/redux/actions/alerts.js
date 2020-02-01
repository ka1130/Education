import { FIRE_ALERT, DISMISS_ALERT } from "redux/actions/types";

export const fireAlert = (alert, id) => ({
  type: FIRE_ALERT,
  payload: { ...alert, id }
});

export const dismissAlert = alert => ({
  type: DISMISS_ALERT,
  payload: alert
});
