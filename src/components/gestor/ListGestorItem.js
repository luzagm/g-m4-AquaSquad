import React from "react";
import Circle from "../Circle";
import "../../stylesheets/components/ListGestorItem.scss";

const renderName = (usersData) => {
  return usersData.map(user => {
    return (<p>{user.name}</p>)
  })
};

const renderDate = (userHolidays) => {
  return userHolidays.map(holiday => {
    return (<p>{holiday.date.replace(/^(\d{4})-(\d{2})-(\d{2})$/g, "$3/$2/$1")}</p>)
  })
};

const ListGestorItem = props => {
  const { usersData, userHolidays } = props;
  console.log(usersData)

  return (
    <div className="mainwrap__gestoritem row col-12">
      <div className="mainwrap__gestoritem--status col-5">
        <Circle />
        {renderName(usersData)}
        {/*  <p>{user.chapter_id}</p>  Usaremos este ID para saber qué vacaciones pendiente tiene este usuario    {renderDate(holidaysData)}*/}
      </div>
      <p className="col-4">{renderDate(userHolidays)}</p>

      <p className="col-3">{usersData.project}</p>
    </div>
  );
};

export default ListGestorItem;
