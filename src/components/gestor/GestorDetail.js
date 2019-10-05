import React from "react";
import AsideBar from "../AsideBar";
import Button from "../Button";
import GestorDetailInfo from "./GestorDetailInfo";
import "../../stylesheets/components/ListGestorDetail.scss";

const GestorDetail = props => {
  return (
    <div className="details__mainwrap row">
      <AsideBar picture={props.picture} btnChange={<Button name="Cambiar a Solicitudes" />} />
      <div className="detailmain col-9">
        <h2 className="detailwrap__title">Solicitudes proyecto Wadus</h2>
        <GestorDetailInfo />
      </div>
    </div>
  );
};

export default GestorDetail;
