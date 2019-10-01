import React from "react";
import ListUserItem from "./ListUserItem";
import ListUserStatus from "./ListUserStatus";
import "../../stylesheets/components/User.scss";
import "../../stylesheets/App.scss";

const UserList = props => {
  return (
    <div>
      <div className="mainwrap col-12">
        <h2 className="mainwrap__title">Solicitudes</h2>
        <ListUserStatus />
        <ListUserItem />
      </div>
    </div>
  );
};

export default UserList;
