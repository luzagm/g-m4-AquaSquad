import React from "react";
import ListGestorItem from "./ListGestorItem";
import ListGestorStatus from "./ListGestorStatus";
import Filters from "../Filters";
import "../../stylesheets/components/Gestor.scss";
import "../../stylesheets/App.scss";

const renderList = (data, project) => {
  return data
    .filter(user => {
      return user.project.includes(project);
    })
    .map((user, index) => {
      return <ListGestorItem user={user} key={index} />;
    });
};

const GestorList = props => {
  const { data, handleSelect, project } = props;

  return (
    <div className="gestormain">
      <div className="mainwrap">
        <h2 className="mainwrap__title">Solicitudes</h2>
        <Filters data={data} handleSelect={handleSelect} />
        <ListGestorStatus />
        <ul>{renderList(data, project)}</ul>
      </div>
    </div>
  );
};

export default GestorList;
