import React from 'react';
import './Card.css'

const Card = ({worker, index}) => {
    const drag = ev => {
        ev.dataTransfer.setData("text", ev.target.id)
    };

    const getClassName = (index) => {
        switch(index) {
            case 0:
                return " bottom";
                break;
            case 1:
                return " second-bottom";
                break;
            default:
                return ""
        }
    }

    return (
        <div id={worker.name} className={"card" + getClassName(index)} draggable onDragStart={e => drag(e)}>
            <div className="image-container">
                <img src='http://placecorgi.com/300/300' alt="james-bond" draggable="false"/>
            </div>
            <div className="info">
                <h1>{worker.name}</h1>
            </div>
        </div>
    )
};

export default Card
