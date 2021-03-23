import { applyMiddleware, createStore, compose } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import userReducer from '../reducers/users';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const allReducers = combineReducers({
  user: userReducer,
});

let store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)));

export default store;
