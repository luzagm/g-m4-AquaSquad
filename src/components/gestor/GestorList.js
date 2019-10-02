import React from "react";
import ListGestorItem from "./ListGestorItem";
import ListGestorStatus from "./ListGestorStatus";
import Filters from "../Filters";
import "../../stylesheets/components/Gestor.scss";
import "../../stylesheets/App.scss";
import AsideBarButton from "../AsideBarButton";

const renderList = data => {
  return data.map((user, index) => {
    return <ListGestorItem user={user} key={index} />;
  });
};

const GestorList = props => {
  const { data } = props;
  return (
    <div className="gestormain">
      <div className="mainwrap__gestor row">
        <AsideBarButton />
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
