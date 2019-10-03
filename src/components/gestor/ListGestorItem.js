import React from "react";
import Circle from "../Circle";
import "../../stylesheets/components/ListGestorItem.scss";

const ListGestorItem = props => {
  // const { userHolidays, project } = props;
  // const holidaysStatus = userHolidays.status;

  const { user, holidays } = props;

  const holidayDate = holidays.date.replace(
    /^(\d{4})-(\d{2})-(\d{2})$/g,
    "$3/$2/$1"
  );

  const holidaysStatus = holidays.status;

  return (
    <div className="mainwrap__gestoritem row col-12">
      <p className="col-4">{holidayDate}</p>
      <div className="mainwrap__gestoritem--status col-5">
        <Circle color={holidaysStatus} />
        <p>{user.name}</p>
      </div>
      <p className="col-3">{user.project}</p>
    </div>
  );
};

export default ListGestorItem;
