import axios from 'axios';
import { createAction } from 'redux-actions';

// action types
const PRODUCTS = 'FETCH_PRODUCTS';

const payloadCreator = userId => axios.get('http://localhost:3000/products', { headers: { 'X-User-Id': userId } });

// actions creators
const ProductsAsync = createAction(PRODUCTS, payloadCreator);

const fetchProducts = () => dispatch => dispatch(ProductsAsync('1'));

fetchProducts.toString = ProductsAsync.toString;

export default fetchProducts;
