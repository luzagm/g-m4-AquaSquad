import React from "react";
import ListUserItem from "./ListUserItem";
import ListUserStatus from "./ListUserStatus";
import AsideBar from "../AsideBar";
import "../../stylesheets/components/User.scss";
import "../../stylesheets/App.scss";
import Button from "../Button";
import { Link } from "react-router-dom";

const renderList = data => {
  return data.map((user, index) => {
    return <ListUserItem userHolidays={user} key={index} />;
  });
};

const UserList = props => {
  const { holidaysData } = props;

  return (
    <div className="mainwrapmain row">
      <AsideBar />
      <div className="mainwrap col-9">
        <h2 className="mainwrap__title">Solicitudes</h2>
        <ListUserStatus />
        <ul>{renderList(holidaysData)}</ul>
      </div>
      <Link to="/user/form">
        <Button name="Añadir petición" />
      </Link>
    </div>
  );
};

export default UserList;
