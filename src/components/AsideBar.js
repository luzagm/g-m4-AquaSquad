import React from "react";
import Button from "./Button";
import doll from "../assets/images/doll.png";
import "../stylesheets/components/AsideBar.scss";
import "../stylesheets/components/Button.scss";

const AsideBar = props => {
  return (
    <div className="asidebar__container">
      <img src={doll} alt="doll" className="asidebar__img"></img>
      <h4 className="asidebar__name">Cayetana</h4>
      <h5 className="asidebar__job">Digital Bus Integration Analyst</h5>
      <div className="asidebar__paid">
        <h5>MY PAID TIME OFF</h5>
        <small>As of 9/15/19</small>
      </div>
      <div className="asidebar__time">4.4</div>
      <h5>Hours</h5>

      <Button />
    </div>
  );
};

export default AsideBar;
