import React from "react";
import PropTypes from "prop-types";
//import { Button } from "components/controls";
//import { Counter } from "components/widgets";

const displayName = "Cart";

const propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired
};

function Cart({ products }) {
  return <div />;
}

Cart.displayName = displayName;
Cart.propTypes = propTypes;

export default Cart;
