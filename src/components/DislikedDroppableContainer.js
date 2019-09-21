import React from 'react';
import './DroppableContainer.css';
import {newDislikedWorkerArray, newWorkersArray} from "../utilities";

const DislikedDroppableContainer = ({workers, dislikedWorkers, onHandleDislike}) => {

    const allowDrop = ev => {
        ev.preventDefault();
    };

    const drop = ev => {
        ev.preventDefault();
        const workerName = ev.dataTransfer.getData("text");
        const workersArray = newWorkersArray(workerName, workers);
        const dislikedWorkersArray = newDislikedWorkerArray(workerName, workers, dislikedWorkers);
        onHandleDislike(workersArray, dislikedWorkersArray)
    };

    return (
        <div className="container-drag" onDrop={e => drop(e)} onDragOver={e => allowDrop(e)}/>
    )
};

export default DislikedDroppableContainer;
