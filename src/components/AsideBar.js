import React from "react";
import doll from "../images/doll.png";

const AsideBar = props => {
  return (
    <div className="asidebar__container">
      <img src={doll} alt="doll"></img>
      <h4>Cayetana</h4>
      <div>4.4</div>
    </div>
  );
};

export default AsideBar;
