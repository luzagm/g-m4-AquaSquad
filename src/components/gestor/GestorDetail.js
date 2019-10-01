import React from "react";

import GestorDetailInfo from "./GestorDetailInfo";
import "../../stylesheets/components/ListGestorDetail.scss";

const GestorDetail = props => {
  return (
    <div className="detailmain">
      <h2 className="detailwrap__title">Solicitudes proyecto Wadus</h2>
      <GestorDetailInfo />
    </div>
  );
};

export default GestorDetail;
