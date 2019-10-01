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

const ListUserItem = props => {
  const { userHolidays } = props;
  const holidaysStatus = userHolidays.status;

  return (
    <div className="mainwrap__useritem row col-12">
      <p className="col-4">22/01/2019 - 31/01/2019</p>
      <div className="mainwrap__useritem--status col-5">
        <Circle color={userHolidays.status} />
        <p>{renderStatus(holidaysStatus)}</p>
      </div>
      <p className="col-3">Wadus</p>
    </div>
  );
};

export default ListUserItem;
