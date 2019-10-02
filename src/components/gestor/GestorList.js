import React from "react";
import Header from "../Header";
import AsideBar from "../AsideBar";
import ListGestorItem from "./ListGestorItem";
import ListGestorStatus from "./ListGestorStatus";
import Filters from "../Filters";
import "../../stylesheets/components/Gestor.scss";
import "../../stylesheets/App.scss";

// const renderHolidays = dataHolidays => {
//   return dataHolidays.map(date => {
//     return date;
//   });
// };

// const renderList = (dataResult, dataHolidays) => {
//   return dataResult.map((user, index) => {
//     return (
//       <ListGestorItem
//         dataResult={user}
//         dataHolidays={dataHolidays}
//         key={index}
//       />
//     );
//   });
// };

const GestorList = props => {
  const { dataResult } = props;
  const holidaysData = dataResult.holidays.holidays;
  const usersData = dataResult.users;
  console.log(holidaysData);
  console.log(usersData);

  if (holidaysData.employee_id === usersData.employee_id) {
    console.log(holidaysData);
  }
  // const dataResultDate = dataResult.pop();
  // const dataHolidays = dataResultDate.holidays;
  // const holidayPlease = renderHolidays(dataHolidays);

  return (
    <div className="gestormain">
      <div className="mainwrap__gestor row">
        <AsideBar />
        <div className="col-9">
          <h2 className="mainwrap__title">Gestión de solicitudes</h2>
          {/* <Filters dataResult={dataResult} /> */}
          <ListGestorStatus />
          <ListGestorItem />
        </div>
      </div>
    </div>
  );
};

export default GestorList;
