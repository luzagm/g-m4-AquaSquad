import React from "react";
import Circle from "../Circle";
import "../../stylesheets/components/ListGestorItem.scss";

const renderDate = holidaysData => {
  return holidaysData.replace(/^(\d{4})-(\d{2})-(\d{2})$/g, "$3/$2/$1");
};

const ListGestorItem = props => {
  const { usersData, holidaysData } = props;
  // const holidaysDate = renderDate(holidaysData);

  return (
    <div className="mainwrap__gestoritem row col-12">
      <p className="col-4">{renderDate(holidaysData)}</p>
      <div className="mainwrap__gestoritem--status col-5">
        <Circle />
        <p>{usersData.name}</p>
        {/*  <p>{user.chapter_id}</p>  Usaremos este ID para saber qué vacaciones pendiente tiene este usuario*/}
      </div>
      <p className="col-3">{usersData.project}</p>
    </div>
  );
};

export default ListGestorItem;
