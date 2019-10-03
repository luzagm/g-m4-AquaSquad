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

  console.log(holidayDate);
  // const holidayDate = props.holidays.date;

  // const renderDate = holidayDate => {
  //   return <li>{holidayDate}</li>;
  // };

  return (
    <div className="mainwrap__gestoritem row col-12">
      {/* <p className="col-4">{listHolidaysTotal}</p> */}
      <p className="col-4">{holidayDate}</p>
      <div className="mainwrap__gestoritem--status col-5">
        {/* <p>{HolidaysStatus(holidays1)}</p> */}
        {/* {console.log(holidays1)} */}
        {/* <Circle color={userHolidays} /> */}
        <p>{user.name}</p>
      </div>
      <p className="col-3">{user.project}</p>
      {/*<Circle />
        <p>{paintNames(holidaysData)}</p>
        <p>{user.chapter_id}</p>  Usaremos este ID para saber qué vacaciones pendiente tiene este usuario
      </div>
      <p className="col-3">{paintProjects(holidaysData)}</p> */}
    </div>
  );
};

export default ListGestorItem;
