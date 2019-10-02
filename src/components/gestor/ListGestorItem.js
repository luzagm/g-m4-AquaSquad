import React from "react";
import Circle from "../Circle";
import "../../stylesheets/components/ListGestorItem.scss";

//  const renderName = dataResult => {
//    return dataResult.map(user => {
//      return <p>{user.name}</p>;
//    });
//  };

// const renderDate = dataResult => {
//   console.log(dataResult.holidays);
//   return dataResult.holidays.map((date, index) => {
//     return <p id={index}>{date.date}</p>;
//   });
//   //    return dataResult.holidays.map((holiday, key) => {
//   //    return <p dataResult={holiday.date} key={employee_id}/>;
//   //  });
// };

const ListGestorItem = props => {
  const { dataResult, dataHolidays } = props;
  console.log(dataHolidays);

  return (
    <div className="mainwrap__gestoritem row col-12">
      <p className="col-4">{dataHolidays.date}</p>

      <div className="mainwrap__gestoritem--status col-5">
        <Circle />
        <p>{dataResult.name}</p>
        {/* <p>{user.chapter_id}</p>  Usaremos este ID para saber qué vacaciones pendiente tiene este usuario */}
      </div>
      <p className="col-3">{dataResult.project}</p>
    </div>
  );
};

export default ListGestorItem;
