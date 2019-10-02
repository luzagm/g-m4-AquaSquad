import React from "react";
import ListGestorItem from "./ListGestorItem";
import ListGestorStatus from "./ListGestorStatus";
import Filters from "../Filters";
import "../../stylesheets/components/Gestor.scss";
import "../../stylesheets/App.scss";

const renderList = data => {
  return data.map((user, index) => {
    console.log(user);
    return <ListGestorItem user={user} key={index} />;
  });
};

const GestorList = props => {
  const { data } = props;
  console.log(data);

  return (
    <div className="gestormain">
      <div className="mainwrap">
        <h2 className="mainwrap__title">Solicitudes</h2>
        <Filters data={data} />
        <ListGestorStatus />
        <ul>{renderList(data)}</ul>
      </div>
    </div>
  );
};

export default GestorList;
