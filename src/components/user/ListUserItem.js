import React from "react";
import Circle from "../Circle";
import "../../stylesheets/components/ListUserItem.scss";

const renderStatus = holidaysStatus => {
  if (holidaysStatus === "pending") {
    return "Pendiente";
  } else if (holidaysStatus === "enjoyed") {
    return "Disfrutadas";
  } else if (holidaysStatus === "approved") {
    return "Aprobadas";
  } else if (holidaysStatus === "rejected") {
    return "Rechazadas";
  } else {
    return "Vacaciones de empresa";
  }
};

const renderDate = date => {
  return date.replace(/^(\d{4})-(\d{2})-(\d{2})$/g, "$3/$2/$1");
};

const ListUserItem = props => {
  const { data, userHolidays } = props;
  console.log(data);
  const holidaysStatus = userHolidays.status;
  const date = userHolidays.date;

  return (
    <div className="mainwrap__useritem row col-12">
      <p className="col-4">{renderDate(date)}</p>
      <div className="mainwrap__useritem--status col-5">
        <Circle color={userHolidays.status} />
        <p>{renderStatus(holidaysStatus)}</p>
      </div>
      <p className="col-3">{data.project}</p>
    </div>
  );
};

export default ListUserItem;
