import streams from "apis/streams";
import * as constants from "actions/constants";

export const createStream = formValues => async dispatch => {
  streams.post("/streams", formValues);
};
