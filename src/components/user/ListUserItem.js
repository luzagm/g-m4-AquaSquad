import React from "react";
import Circle from "../Circle";
import "../../stylesheets/components/ListUserItem.scss";

const ListUserItem = props => {
  return (
    <div className="mainwrap__useritem row col-12">
      <p className="col-4">22/01/2019 - 31/01/2019</p>
      <div className="mainwrap__useritem--status col-5">
        <Circle />
        <p>Disfrutadas</p>
      </div>
      <p className="col-3">Wadus</p>
    </div>
  );
};

export default ListUserItem;
