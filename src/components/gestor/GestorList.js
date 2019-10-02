import React from "react";
import ListGestorItem from "./ListGestorItem";
import ListGestorStatus from "./ListGestorStatus";
import Filters from "../Filters";
import "../../stylesheets/components/Gestor.scss";
import "../../stylesheets/App.scss";

const renderList = (data, userName, project, chapter, holidaysData) => {
  console.log(chapter);
  return data
    .filter(user => {
      return user.name.includes(userName);
    })
    .filter(user => {
      return user.chapter_name.includes(chapter);
    })
    .filter(user => {
      return user.project.includes(project);
    })
    .map((user, index) => {
      return <ListGestorItem user={user} holidays={holidaysData} key={index} />;
    });
};

const GestorList = props => {
  const {
    data,
    userName,
    getUserName,
    chapter,
    getChapter,
    project,
    getProject,
    holidaysData
  } = props;
  console.log(chapter);

  return (
    <div className="gestormain">
      <div className="mainwrap">
        <h2 className="mainwrap__title">Solicitudes</h2>
        <Filters
          data={data}
          getUserName={getUserName}
          getChapter={getChapter}
          getProject={getProject}
        />
        <ListGestorStatus />
        <ul>{renderList(data, userName, chapter, project, holidaysData)}</ul>
      </div>
    </div>
  );
};

export default GestorList;
