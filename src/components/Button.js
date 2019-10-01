import React from "react";
import "../stylesheets/components/Button.scss";

const Button = props => {
  return <button className="btn">{props.name}</button>;
};

export default Button;
