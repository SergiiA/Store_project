
import { handleActions } from 'redux-actions';
import { FULFILLED } from 'redux-promise-middleware';
import { List, fromJS } from 'immutable';
=import { products } from './actions';

const initStoreState = List([]);

const products = handleActions(
  {
    [`${products}_${FULFILLED}`]: (state, { payload: { data } }) => fromJS(data),
  },
  initStoreState,
);

export default products;
