import React from "react";
import Circle from "../Circle";
import { Link } from "react-router-dom";
import "../../stylesheets/components/ListGestorItem.scss";

const ListGestorItem = props => {
  const { user, holidays, acceptHolidays } = props;

  const holidayDate = holidays.date.replace(
    /^(\d{4})-(\d{2})-(\d{2})$/g,
    "$3/$2/$1"
  );

  const holidaysStatus = holidays.status;
  // const idUser =

  return (
    <div className="mainwrap__gestoritem row col-12">
      <p className="col-4">{holidayDate}</p>

      <div className="mainwrap__gestoritem--status col-4">
        <Circle color={holidaysStatus} />
        <p>{user.name}</p>
      </div>

      <p className="col-3">{user.project}</p>

      <div className="holidays__status--btn col-1">
        <Link to="gestor/confirmation/give" onClick={acceptHolidays}>
          <button className="btn__green" type="radio">
            ✓
          </button>
        </Link>
        <Link to="/reject">
          <button className="btn__red" type="radio">
            x
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ListGestorItem;
