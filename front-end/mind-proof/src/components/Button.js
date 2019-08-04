import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, children, id, styleOption }) => (
  <button id={id} onClick={onClick}>{children}</button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  id: PropTypes.string
};

export const ButtonLabel = 10;

export default Button;
