import streams from "apis/streams";
import * as constants from "redux/actions/constants";
import { history } from "customHistory";

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post("/streams", { ...formValues, userId });
  dispatch({ type: constants.CREATE_STREAM, payload: response.data });
  // do some programatic navigation to get the user back to the root route
  history.push("/");
};

export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues);
  dispatch({ type: constants.EDIT_STREAM, payload: response.data });
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: constants.DELETE_STREAM, payload: id });
};

export const fetchSingleStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: constants.FETCH_SINGLE_STREAM, payload: response.data });
};

export const fetchAllStreams = () => async dispatch => {
  const response = await streams.get("/streams");
  dispatch({ type: constants.FETCH_ALL_STREAMS, payload: response.data });
};

export const signIn = userId => ({ type: constants.SIGN_IN, payload: userId });
export const signOut = () => ({ type: constants.SIGN_OUT });
