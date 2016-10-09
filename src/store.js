import { applyMiddleware, compose, createStore } from "redux";
import createLogger from "redux-logger";

import reducers from './reducers';

const middleware = [
  createLogger()
];

// Middleware + DevTools Chrome
const enhancers = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(
  reducers,
  {},
  enhancers
);

export default store;
