import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import reducers from '../reducers';

let middleware = [];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

export default createStore(reducers, applyMiddleware(...middleware));
