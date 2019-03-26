import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "reducers";
import { searchSuccess } from "actions/search";

import App from "components/App";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const results = [
  {
    full: "https://media3.giphy.com/media/g5KhmX06Q0XBu/giphy.gif",
    thumbnail: "https://media3.giphy.com/media/g5KhmX06Q0XBu/100_s.gif"
  },
  {
    full: "https://media1.giphy.com/media/A8NNZlVuA1LoY/giphy.gif",
    thumbnail: "https://media1.giphy.com/media/A8NNZlVuA1LoY/100_s.gif"
  }
];

window.setTimeout(() => {
  store.dispatch(searchSuccess(results));
}, 2000);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
