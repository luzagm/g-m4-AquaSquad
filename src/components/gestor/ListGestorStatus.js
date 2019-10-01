import React from "react";
import "../../stylesheets/components/ListGestorStatus.scss";

const ListGestorStatus = () => {
  return (
    <div className="mainwrap__status row col-12">
      <p className="col-4">Fecha (inicio/fin)</p>
      <p className="col-5">Usuario</p>
      <p className="col-3">Proyecto</p>
    </div>
  );
};

export default ListGestorStatus;
