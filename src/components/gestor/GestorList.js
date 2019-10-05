import React from "react";
import { Link } from "react-router-dom";
import AsideBar from "../AsideBar";
import ListGestorItem from "./ListGestorItem";
import ListGestorStatus from "./ListGestorStatus";
import Filters from "../Filters";
import "../../stylesheets/components/Gestor.scss";
import "../../stylesheets/App.scss";
import Button from "../Button";
// import { Link } from "react-router-dom";

const renderList = (data, userName, project, holidaysData, acceptHolidays, rejectHolidays) => {
  const holidaysDate = holidaysData.holidays;
  const user = data.find(user => {
    return user.name === userName
  })

  let validHolidays = holidaysDate.filter(day => {
    if (!user) {
      return true
    }
    return day.employee_id === user.employee_id
  })
  return validHolidays.map((holiday, index) => {
    const user = data.find(user => {
      return user.employee_id === holiday.employee_id
    })
    return (
      <ListGestorItem
        user={user}
        holidays={holiday}
        key={index}
        acceptHolidays={acceptHolidays}
        rejectHolidays={rejectHolidays}
      />
    );
  })
};

const GestorList = props => {
  const {
    action,
    data,
    userName,
    getUserName,
    project,
    getProject,
    holidaysData,
    acceptHolidays,
    rejectHolidays
  } = props;

  return (
    <div className="gestormain col-12">
      <div className="mainwrap__gestor row">
        <AsideBar
          picture={props.picture}
          time={props.time}
          name={props.userLogin}
          btnChange={<Button name="Cambiar a Solicitudes" />}
        />
        <div className="mainwrap col-9">
          <div className="requestscontainer">
            <Link to="/" className="link__logOut"> Log out</Link>
            <h2 className="mainwrap__title">Solicitudes</h2>
            <button className="reset-btn" onClick={action}>
              Reset
            </button>
          </div>
          <Filters
            data={data}
            getUserName={getUserName}
            getProject={getProject}
          />
          <ListGestorStatus />
          <ul>
            {renderList(data, userName, project, holidaysData, acceptHolidays, rejectHolidays)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GestorList;
