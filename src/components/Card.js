import React from 'react';
import './Card.css'

const Card = ({worker, index}) => {
    const drag = ev => {
        ev.dataTransfer.setData("text", ev.target.id)
    };

    return (
        <div id={worker.name} className={index <= 2 ? `card ${index}` : "top card"} draggable onDragStart={e => drag(e)}>
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
