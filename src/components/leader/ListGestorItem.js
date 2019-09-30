import React from 'react';
import Circle from '../Circle';
import '../../stylesheets/components/ListGestorItem.scss';


const ListGestorItem = (props) => {
    return (
        <div className="mainwrap__gestoritem">
            <p>22/01/2019 - 31/01/2019</p>

            <p>Jesús Esteban Sánchez</p>
            <div className="mainwrap__gestoritem--status">
                <p>Wadus</p>
                <Circle />
            </div>
        </div>

    )
}

export default ListGestorItem;