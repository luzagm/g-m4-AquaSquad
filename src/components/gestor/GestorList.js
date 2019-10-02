import React from "react";
import Header from "../Header";
import AsideBar from "../AsideBar";
import ListGestorItem from "./ListGestorItem";
import ListGestorStatus from "./ListGestorStatus";
import Filters from "../Filters";
import "../../stylesheets/components/Gestor.scss";
import "../../stylesheets/App.scss";

const renderHolidaysData = holidays => {
  return holidays.holidays.map(holiday => {
    return holiday.date;
  });
};

const renderUserData = users => {
  return users.map(user => {
    return user;
  });
};

const renderList = (usersData, holidaysData) => {
  return <ListGestorItem usersData={usersData} holidaysData={holidaysData} />;
};

const GestorList = props => {
  const { data } = props;
  console.log(props);
  const holidays = data.holidays;
  console.log(holidays);
  const users = data.users;
  const holidaysData = renderHolidaysData(holidays);
  const usersData = renderUserData(users);

  return (
    <div className="gestormain">
      <div className="mainwrap__gestor row">
        <AsideBar />
        <div className="col-9">
          <h2 className="mainwrap__title">Gestión de solicitudes</h2>
          <Filters />
          <ListGestorStatus />
          {renderList(usersData, holidaysData)}
        </div>
      </div>
    </div>
  );
};

export default GestorList;
