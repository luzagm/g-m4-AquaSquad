import React from "react";
import Header from "../Header";
import AsideBar from "../AsideBar";
import ListGestorItem from "./ListGestorItem";
import ListGestorStatus from "./ListGestorStatus";
import Filters from "../Filters";
import "../../stylesheets/components/Gestor.scss";
import "../../stylesheets/App.scss";


const GestorList = props => {
  const { dataResult } = props;
  const holidaysData = dataResult.holidays.holidays;
  const usersData = dataResult.users;

  return (
    <div className="gestormain">
      <div className="mainwrap__gestor row">
        <AsideBar />
        <div className="col-9">
          <h2 className="mainwrap__title">Gestión de solicitudes</h2>
          {/* <Filters dataResult={dataResult} /> */}
          <ListGestorStatus />
          <ListGestorItem usersData={usersData} holidaysData={holidaysData} />
        </div>
      </div>
    </div>
  );
};

export default GestorList;
