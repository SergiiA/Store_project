import React from "react";
import PropTypes from "prop-types";

const divStyle = {
  padding: "0.5%"
};

const Header = ({ name }) => <div className="Header" style={divStyle} />;

Header.displayName = "Header";

Header.propTypes = {
  name: PropTypes.string
};

Header.defaultProps = {
  name: ""
};

export default Header;
