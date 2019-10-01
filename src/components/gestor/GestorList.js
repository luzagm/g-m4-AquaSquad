import React from "react";
import Header from "../Header";
import ListGestorItem from "./ListGestorItem";
import ListGestorStatus from "./ListGestorStatus";
import Filters from "../Filters";
import "../../stylesheets/components/Gestor.scss";
import "../../stylesheets/App.scss";

const GestorList = props => {
  return (
    <div className="gestormain col-9">
      <div className="mainwrap">
        <h2 className="mainwrap__title">Solicitudes</h2>
        <Filters />
        <ListGestorStatus />
        <ListGestorItem />
      </div>
    </div>
  );
};

export default GestorList;
