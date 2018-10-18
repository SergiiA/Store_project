import { createAction } from "redux-actions";

const buyProduct = createAction("BUY_PRODUCT", name => ({ name }));

export default buyProduct;
