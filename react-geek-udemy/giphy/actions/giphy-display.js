import { SHOW_GIPHY, HIDE_GIPHY } from "actions/types";

export const showGiphy = giphy => ({
  type: SHOW_GIPHY,
  payload: giphy
});

export const hideGiphy = () => ({ type: HIDE_GIPHY });
