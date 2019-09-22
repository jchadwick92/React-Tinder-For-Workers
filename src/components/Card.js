import React from 'react';

const Card = ({worker, index}) => {
    const drag = ev => {
        ev.dataTransfer.setData("text", ev.target.id)
    };

    const getClassName = (index) => {
        switch(index) {
            case 0:
                return " bottom";
            case 1:
                return " second-bottom";
            default:
                return ""
        }
    };

    return (
        <div id={worker.name} className={"card" + getClassName(index)} draggable onDragStart={e => drag(e)}>
            <div className="image-container">
                <img src={worker.image} alt="james-bond" draggable="false"/>
            </div>
            <div className="text-center">
                <h1>{worker.name}</h1>
            </div>
        </div>
    )
};

export default Card
