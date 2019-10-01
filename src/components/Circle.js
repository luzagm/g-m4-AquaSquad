import React from "react";
import "../stylesheets/components/Circle.scss";

const Circle = props => {
  const { color } = props;
  return <div className={`mainwrap__useritem--circle ${color}`}></div>;
};

export default Circle;
