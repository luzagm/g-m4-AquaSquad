import React from "react";
import Header from "../Header";
import AsideBar from "../AsideBar";
import ListGestorItem from "./ListGestorItem";
import ListGestorStatus from "./ListGestorStatus";
import Filters from "../Filters";
import "../../stylesheets/components/Gestor.scss";
import "../../stylesheets/App.scss";

const renderList = (data, userName, project, holidaysData) => {
  const holidaysDate = holidaysData.holidays;
  console.log(holidaysDate);

  return data
    .filter(user => {
      return user.name.includes(userName);
    })
    .filter(user => {
      return user.project.includes(project);
    })
    .map((user, index) => {
      return (
        <ListGestorItem
          user={user}
          holidays={holidaysDate(holidaysDate.length - 1)}
          key={index}
        />
      );
    });
};

const GestorList = props => {
  const {
    data,
    userName,
    getUserName,
    // chapter,
    // getChapter,
    project,
    getProject,
    holidaysData
  } = props;

  return (
    <div className="gestormain col-12">
      <div className="mainwrap__gestor row">
        <AsideBar />
        <div className="mainwrap col-9">
          <h2 className="mainwrap__title">Solicitudes</h2>
          <Filters
            data={data}
            getUserName={getUserName}
            // getChapter={getChapter}
            getProject={getProject}
          />
          <ListGestorStatus />
          <ul>{renderList(data, userName, project, holidaysData)}</ul>
        </div>
      </div>
    </div>
  );
};

export default GestorList;
