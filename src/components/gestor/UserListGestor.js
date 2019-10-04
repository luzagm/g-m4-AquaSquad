import React from "react";
import ListUserItem from "../user/ListUserItem";
import ListUserStatus from "../user/ListUserStatus";
import AsideBar from "../AsideBar";
import "../../stylesheets/components/User.scss";
import "../../stylesheets/App.scss";
import Button from "../Button";
import { Link } from "react-router-dom";


const renderList = (users, holidaysData) => {
  return holidaysData.map((holiday, index) => {
    const user = users.find(user => user.employee_id === holiday.employee_id)
    return <ListUserItem userHolidays={holiday} data={user} key={index} />;
  });
};

const UserListGestor = props => {
  const { users, holidays } = props;
  const holidaysData = holidays.holidays;

  return (
    <div className="mainwrapmain row">
      <AsideBar btn={<Button name="Cambiar a Gestión" />} />      <div className="mainwrap col-9">
        <h2 className="mainwrap__title">Solicitudes</h2>
        <ListUserStatus />
        <ul>{renderList(users, holidaysData)}</ul>
      </div>
      <Link to="/user/form">
        <Button name="Nueva petición" />
      </Link>
    </div>
  );
};

export default UserListGestor;




