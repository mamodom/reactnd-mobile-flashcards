import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';

import * as reducers from './reducers';

const composeEnhancers = composeWithDevTools({ realtime: true });

const store = createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
