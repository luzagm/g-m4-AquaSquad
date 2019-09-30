import React from 'react';
import Circle from '../Circle'
import '../../stylehseets/ListUserItem.scss';


const ListUserItem = (props) => {
    return (
        <div className="mainwrap__useritem">
            <p>22/01/2019 - 31/01/2019</p>
            <div>
                <Circle />
                <p>Disfrutadas</p>
            </div>
            <p>Wadus</p>
        </div>

    )
}

export default ListUserItem;