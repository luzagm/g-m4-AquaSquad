import React from "react";
import Circle from "../Circle";
import "../../stylesheets/components/ListGestorItem.scss";

const ListGestorItem = props => {
  // const { userHolidays, project } = props;
  // const holidaysStatus = userHolidays.status;

  const { user, holidays } = props;
  const holidays1 = props.holidays.holidays;
  // console.log(props.holidays.holidays);

  const HolidaysStatus = holidays1 => {
    return holidays1.map(holiday => {
      // return console.log(holiday);
    });
  };

  return (
    <div className="mainwrap__gestoritem row col-12">
      <p className="col-4">22/01/2019 - 31/01/2019</p>
      <div className="mainwrap__gestoritem--status col-5">
        {/* <p>{HolidaysStatus(holidays1)}</p> */}
        {/* {console.log(holidays1)} */}
        <Circle color={props.holidays.holidays} />
        <p>{user.name}</p>
        {/*  <p>{user.chapter_id}</p>  Usaremos este ID para saber qué vacaciones pendiente tiene este usuario*/}
      </div>
      <p className="col-3">{user.project}</p>
    </div>
  );
};

export default ListGestorItem;
