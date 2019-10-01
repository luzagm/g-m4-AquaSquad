import React from "react";
import Header from "../Header";
import GestorDetailInfo from "./GestorDetailInfo";
import "../../stylesheets/components/ListGestorDetail.scss";

const ListGestorDetail = props => {
  return (
    <div className="detailmain">
      <Header />
      <h2 className="detailwrap__title">Solicitudes proyecto Wadus</h2>
      <GestorDetailInfo />
    </div>
  );
};

export default ListGestorDetail;
