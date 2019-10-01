import React from "react";
import Circle from "../Circle";
import "../../stylesheets/components/ListGestorItem.scss";

const ListGestorItem = props => {
  return (
    <div className="mainwrap__gestoritem row col-12">
      <p className="col-4">22/01/2019 - 31/01/2019</p>
      <div className="mainwrap__gestoritem--status col-5">
        <Circle />
        <p>Jesús Esteban Sánchez</p>
      </div>

      <p className="col-3">Wadus</p>
    </div>
  );
};

export default ListGestorItem;
