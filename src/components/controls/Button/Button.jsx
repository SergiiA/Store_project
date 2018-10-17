import React from "react";
import PropTypes from "prop-types";

const displayName = "Button";

const propTypes = {
  text: PropTypes.string,
  isActive: PropTypes.bool
};

const defaultProps = {
  text: ""
};

function Button({text}) {
  return (
    <button type="button" >
      {text}
    </button>
  );
}

Button.displayName = displayName;
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
