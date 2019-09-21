import React from 'react';
import './DroppableContainer.css';

const DroppableContainer = ({onHandleDrop}) => {
    const allowDrop = ev => {
        ev.preventDefault();
    };

    const drop = ev => {
        ev.preventDefault();
        const workerName = ev.dataTransfer.getData("text");
        onHandleDrop(workerName)
    };

    return (
        <div className="container-drag" onDrop={e => drop(e)} onDragOver={e => allowDrop(e)}/>
    )
};

export default DroppableContainer;
