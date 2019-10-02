import React from "react";
import Circle from "../Circle";
import "../../stylesheets/components/ListGestorItem.scss";

const ListGestorItem = props => {
  // const { userHolidays, project } = props;
  // const holidaysStatus = userHolidays.status;

  const { user } = props;
  console.log(props);

  return (
    <div className="mainwrap__gestoritem row col-12">
      <p className="col-4">22/01/2019 - 31/01/2019</p>
      <div className="mainwrap__gestoritem--status col-5">
        <Circle color={props.user.status} />
        <p>{user.name}</p>
        {/*  <p>{user.chapter_id}</p>  Usaremos este ID para saber qué vacaciones pendiente tiene este usuario*/}
      </div>
      <p className="col-3">{user.project}</p>
    </div>
  );
};

export default ListGestorItem;
