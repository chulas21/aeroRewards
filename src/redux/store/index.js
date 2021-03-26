import { applyMiddleware, createStore, compose } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import userReducer from '../reducers/user';
import productReducer from '../reducers/products';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const allReducers = combineReducers({
  user: userReducer,
  product: productReducer,
});

let store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)));

export default store;
