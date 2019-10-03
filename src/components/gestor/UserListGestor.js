import React from "react";
import ListUserItem from "../user/ListUserItem";
import ListUserStatus from "../user/ListUserStatus";
import AsideBar from "../AsideBar";
import "../../stylesheets/components/User.scss";
import "../../stylesheets/App.scss";
import Button from "../Button";
import { Link } from "react-router-dom";

const renderList = holidays => {
  console.log(holidays);
  return holidays.map((user, index) => {
    return <ListUserItem userHolidays={user} key={index} />;
  });
};

const renderData = user => {
  console.log(user);
};

const UserListGestor = props => {
  const { holidays, data } = props;
  console.log(props.data);

  return (
    <div className="mainwrapmain row">
      <AsideBar btn={<Button name="Cambiar a Gestión" />} />
      <div className="mainwrap col-9">
        <h2 className="mainwrap__title">Solicitudes</h2>
        <ListUserStatus />
        <ListUserItem data={data} holidays={holidays} />
        <ul>{renderData(data)}</ul>
      </div>
      <Link to="/user/form">
        <Button name="Nueva petición" />
      </Link>
    </div>
  );
};

export default UserListGestor;
