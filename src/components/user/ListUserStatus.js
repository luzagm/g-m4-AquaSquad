import React from "react";
import "../../stylesheets/components/ListUserStatus.scss";

const ListUserStatus = () => {
  return (
    <div className="mainwrap__status row col-12">
      <p className="col-4">Fecha (inicio/fin)</p>
      <p className="col-5">Estado</p>
      <p className="col-3">Proyecto</p>
    </div>
  );
};

export default ListUserStatus;
