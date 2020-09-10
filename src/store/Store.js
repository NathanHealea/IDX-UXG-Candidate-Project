// --- Imports --- //
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

// --- State Imports --- //

import listing from './Listing';
// --- State Setups --- //
const loggerMiddleware = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// --- Exports --- //
export default createStore(
  combineReducers({ listing }),
  composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
);
// export default StatefulStore;
