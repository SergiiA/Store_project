import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/controls';

const displayName = 'Product';

const propTypes = {
  name: PropTypes.string.isRequired,
  removeHandler: PropTypes.func.isRequired,
};

function Product({ name, removeHandler }) {
  return (
    <div>
      {name}
      {' - '}
      <Button text="Remove" onClick={removeHandler} value="removeProduct" />
    </div>
  );
}

Product.displayName = displayName;
Product.propTypes = propTypes;

export default Product;
