import React from 'react';
import './DroppableContainer.css';
import {newLikedWorkersArray, newWorkersArray} from "../utilities";

const LikedDroppableContainer = ({workers, likedWorkers, onHandleLike}) => {

    const allowDrop = ev => {
        ev.preventDefault();
    };

    const drop = ev => {
        ev.preventDefault();
        const data = ev.dataTransfer.getData("text");
        const workersArray = newWorkersArray(data, workers);
        const likedWorkersArray = newLikedWorkersArray(data, workers, likedWorkers);
        onHandleLike(workersArray, likedWorkersArray)
    };

    return (
        <div className="container-drag" onDrop={e => drop(e)} onDragOver={e => allowDrop(e)}/>
    )
};

export default LikedDroppableContainer;
