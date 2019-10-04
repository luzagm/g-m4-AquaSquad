import React from "react";
import ListUserItem from "./ListUserItem";
import ListUserStatus from "./ListUserStatus";
import AsideBar from "../AsideBar";
import "../../stylesheets/components/User.scss";
import "../../stylesheets/App.scss";
import Button from "../Button";
import { Link } from "react-router-dom";

const renderList = (data, holidaysData) => {
  return holidaysData.map((user, index) => {
    return <ListUserItem userHolidays={user} data={data[index]} key={index} />;
  });
};

const UserList = props => {
  const { data, holidays } = props;
  const holidaysData = holidays.holidays;

  return (
    <div className="mainwrapmain row">
      <AsideBar time={props.time} name={props.userLogin} />
      <div className="mainwrap col-9">
        <h2 className="mainwrap__title">Solicitudes</h2>
        <ListUserStatus />
        <ul>{renderList(data, holidaysData)}</ul>
      </div>
      <Link to="/user/form">
        <Button name="Nueva petición" />
      </Link>
    </div>
  );
};

export default UserList;
