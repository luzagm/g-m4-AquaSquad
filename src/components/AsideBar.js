import React from "react";
import "../stylesheets/components/AsideBar.scss";
import "../stylesheets/components/Button.scss";
import { Link } from "react-router-dom";

const AsideBar = props => {
  return (
    <div className="asidebar__container col-3">
      <img src={props.picture} alt="doll" className="asidebar__img"></img>
      <h4 className="asidebar__name">{props.name}</h4>
      <h5 className="asidebar__job">Digital Bus Integration Analyst</h5>
      <div className="asidebar__paid">
        <h5>MY PAID TIME OFF</h5>
        <small>As of 9/15/19</small>
      </div>
      <div className="asidebar__time">{props.time}</div>
      <h5>days</h5>
      <Link to="/Gestor">{props.btn}</Link>
      <Link to="/user/gestor">{props.btnChange}</Link>
    </div >
  );
};

export default AsideBar;
