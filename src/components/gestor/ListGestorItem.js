import React from "react";
import Circle from "../Circle";
import "../../stylesheets/components/ListGestorItem.scss";


const ListGestorItem = props => {
  const { holidaysData, usersData } = props;

  const paintNames = (holidaysData) => {
    const idFinded = holidaysData.map(holidayUser => {
      return holidayUser.employee_id
    })
    const name = idFinded.map(id => {
      return usersData.find(user => {
        return user.employee_id === id
      })
    })
    const listNames = name.map(username => {
      return <p>{username.name}</p>
    })
    return <p>{listNames}</p>
  }

  const paintProjects = (holidaysData) => {
    const idFinded = holidaysData.map(holidayUser => {
      return holidayUser.employee_id
    })
    const projects = idFinded.map(id => {
      return usersData.find(user => {
        return user.employee_id === id
      })
    })
    const listProjects = projects.map(project => {
      return <p>{project.project}</p>
    })
    return <p>{listProjects}</p>
  }

  const listHolidaysTotal = holidaysData.map(holiday => {
    return <p id={holiday.employee_id}>{holiday.date}</p>
  })

  return (
    <div className="mainwrap__gestoritem row col-12">
      <p className="col-4">{listHolidaysTotal}</p>
      <div className="mainwrap__gestoritem--status col-5">
        <Circle />
        <p>{paintNames(holidaysData)}</p>
        {/* <p>{user.chapter_id}</p>  Usaremos este ID para saber qué vacaciones pendiente tiene este usuario */}
      </div>
      <p className="col-3">{paintProjects(holidaysData)}</p>
    </div>
  );
};

export default ListGestorItem;
