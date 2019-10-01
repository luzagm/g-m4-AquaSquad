import React from "react";
import ListUserItem from "./ListUserItem";
import ListUserStatus from "./ListUserStatus";
import AsideBar from "../AsideBar";
import "../../stylesheets/components/User.scss";
import "../../stylesheets/App.scss";

const UserList = props => {
  return (
    <div className="mainwrap col-9">
      <h2 className="mainwrap__title">Solicitudes</h2>
      <ListUserStatus />
      <ListUserItem />
    </div>
  );
};

export default UserList;
