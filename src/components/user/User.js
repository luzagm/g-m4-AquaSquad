import React from 'react';
import ListUserItem from "./ListUserItem";
import ListUserStatus from "./ListUserStatus";
import '../../stylesheets/components/User.scss';


const UserList = (props) => {
    return (
        <div>
            <h2 className="mainwrap__title">Solicitudes</h2>
            <ListUserStatus />
            <ListUserItem />
        </div>
    )
}

export default UserList;