import React from "react";
import Header from "../Header";
import AsideBar from "../AsideBar";
import ListGestorItem from "./ListGestorItem";
import ListGestorStatus from "./ListGestorStatus";
import Filters from "../Filters";
import "../../stylesheets/components/Gestor.scss";
import "../../stylesheets/App.scss";


// const renderUserData = userData => {
//   console.log(userData)
//   return userData
//     .map(user => {
//       return user
//     })
// }

const renderList = (usersData, userHolidays) => {
  return <ListGestorItem usersData={usersData} userHolidays={userHolidays.holidays} />;
};

const GestorList = props => {
  const { data, userData, userHolidays } = props;
  // const user = renderUserData(userData);
  // const holiday = renderHolidayData(userHolidays);

  return (
    <div className="gestormain">
      <div className="mainwrap__gestor row">
        <AsideBar />
        <div className="col-9">
          <h2 className="mainwrap__title">Gestión de solicitudes</h2>
          <Filters userData={userData} />
          <ListGestorStatus />
          {renderList(userData, userHolidays)}
        </div>
      </div>
    </div>
  );
};

export default GestorList;
