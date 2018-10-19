import React from "react";
import PropTypes from "prop-types";
//import Header from "./components/widgets/Header/Header";

const displayName = "DefaultLayout";
const propTypes = {
  children: PropTypes.element.isRequired
};

function DefaultLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

DefaultLayout.displayName = displayName;
DefaultLayout.propTypes = propTypes;

export default DefaultLayout;
