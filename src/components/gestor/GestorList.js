import React from "react";
import AsideBar from "../AsideBar";
import ListGestorItem from "./ListGestorItem";
import ListGestorStatus from "./ListGestorStatus";
import Filters from "../Filters";
import "../../stylesheets/components/Gestor.scss";
import "../../stylesheets/App.scss";
import Button from "../Button";

// import { Link } from "react-router-dom";

const renderList = (data, userName, project, holidaysData) => {
  const holidaysDate = holidaysData.holidays;
  console.log(data);

  return (
    data
      .filter(user => {
        const userId = user.employee_id;
        const holidayId = holidaysDate.find(holiday => {
          return holiday.employee_id === userId;
        });
        console.log(holidayId);
        const userName = data.find(user => {
          return user.name;
        });
        return userName;
      })
      // return user.name.includes(userName);
      // .filter(user => {
      //   return user.project.includes(project);
      // })
      .map((user, index) => {
        return (
          <ListGestorItem user={user} holidays={holidaysDate} key={index} />
        );
      })
  );
};

// const renderList = (data, userName, project, holidaysData) => {
//   console.log(data);
//   const holidaysDate = holidaysData.holidays;
//   return (
//     holidaysDate
//       .filter(holiday => {
//         const holidayId = holiday.employee_id;
//         const userId = data.find(user => {
//           return user.employee_id === holidayId;
//         });
//         const name = data.filter(user => {
//           return user.employee_id === holidayId;
//         });
//         return name;
//       })
//       // .filter(user => {
//       //   return user.project.includes(project);
//       // })
//       .map((holiday, index) => {
//         return <ListGestorItem user={data} holidays={holiday} key={index} />;
//       })
//   );
// };

const GestorList = props => {
  const {
    data,
    userName,
    getUserName,
    project,
    getProject,
    holidaysData
  } = props;

  return (
    <div className="gestormain col-12">
      <div className="mainwrap__gestor row">
        <AsideBar btnChange={<Button name="Cambiar a Solicitudes" />} />
        <div className="mainwrap col-9">
          <h2 className="mainwrap__title">Solicitudes</h2>
          <Filters
            data={data}
            getUserName={getUserName}
            getProject={getProject}
          />
          <ListGestorStatus />
          <ul>{renderList(data, userName, project, holidaysData)}</ul>
        </div>
      </div>
    </div>
  );
};

export default GestorList;
