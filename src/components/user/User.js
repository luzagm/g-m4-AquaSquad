import React from "react";
import { Link } from "react-router-dom";
import ListUserItem from "./ListUserItem";
import ListUserStatus from "./ListUserStatus";
import AsideBar from "../AsideBar";
import "../../stylesheets/components/User.scss";
import "../../stylesheets/App.scss";
import Button from "../Button";

const renderList = (data, holidaysData, userLoginId) => {

  const user = data.find(user => {
    return user.employee_id === userLoginId
  })

  let validHolidays = holidaysData.filter(day => {
    if (!user) {
      return true
    }
    return day.employee_id === userLoginId
  })
  return validHolidays.map((holiday, index) => {
    const user = data.find(user => {
      return user.employee_id === holiday.employee_id
    })
    return (

      <ListUserItem userHolidays={holiday} data={user} key={index} />
    );
  })
};

const UserList = props => {
  const { data, holidays, userLoginId } = props;
  const holidaysData = holidays.holidays;

  return (
    <div className="mainwrapmain row">
      <AsideBar time={props.time} name={props.userLogin} />
      <div className="mainwrap col-9">
        <Link to="/" className="link__logOut"> Log out</Link>
        <h2 className="mainwrap__title">Solicitudes</h2>
        <ListUserStatus />
        <ul>{renderList(data, holidaysData, userLoginId)}</ul>
        <Link className="new__petition" to="/user/form">
          <Button name="Nueva petición" />
        </Link>
      </div>
    </div>
  );
};

export default UserList;
