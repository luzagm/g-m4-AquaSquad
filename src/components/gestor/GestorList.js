import React from "react";
import Header from "../Header";
import AsideBar from "../AsideBar";
import ListGestorItem from "./ListGestorItem";
import ListGestorStatus from "./ListGestorStatus";
import Filters from "../Filters";
import "../../stylesheets/components/Gestor.scss";
import "../../stylesheets/App.scss";
import Button from "../Button";
import { Link } from "react-router-dom";

const renderList = data => {
  return data.map((user, index) => {
    return (
      <Link to="/gestor/details">
        <ListGestorItem user={user} key={index} />
      </Link>
    );
  });
};

const GestorList = props => {
  const { data } = props;
  return (
    <div className="gestormain">
      <div className="mainwrap__gestor row">
        <AsideBar btnChange={<Button name="Cambiar a Solicitudes" />} />
        <div className="col-9">
          <h2 className="mainwrap__title">Gestión de solicitudes</h2>
          <Filters data={data} />
          <ListGestorStatus />
          {renderList(data)}
        </div>
      </div>
    </div>
  );
};

export default GestorList;
