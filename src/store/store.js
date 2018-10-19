import { createStore, compose, applyMiddleware } from "redux";
import { combineReducers } from "redux-immutable";
import promiseMiddleware from "redux-promise-middleware";
import thunkMiddleware from "redux-thunk";
import { selectedProducts, products } from "./reducers";

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunkMiddleware, promiseMiddleware())
);

const store = createStore(
  combineReducers({ selectedProducts, products }),
  enhancer
);

export default store;
