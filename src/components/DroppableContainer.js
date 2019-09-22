import React from 'react';

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
        <div className="droppable-container" onDrop={e => drop(e)} onDragOver={e => allowDrop(e)}/>
    )
};

export default DroppableContainer;
