import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {newWorkersArray, newLikedWorkersArray, newDislikedWorkerArray} from "../utilities";

const Actions = ({workers, likedWorkers, dislikedWorkers, onHandleLike, onHandleDislike}) => {

    const like = () => {
        const nameOfTopCard = getTopCardName();
        const workersArray = newWorkersArray(nameOfTopCard, workers);
        const likedWorkersArray = newLikedWorkersArray(nameOfTopCard, workers, likedWorkers);
        onHandleLike(workersArray, likedWorkersArray)
    };

    const dislike = () => {
        const nameOfTopCard = getTopCardName();
        const workersArray = newWorkersArray(nameOfTopCard, workers);
        const dislikedWorkersArray = newDislikedWorkerArray(nameOfTopCard, workers, dislikedWorkers);
        onHandleDislike(workersArray, dislikedWorkersArray)
    };

    const getTopCardName = () => {
        return workers[workers.length -1].name;
    };

    return (
        <div>
            <label onClick={() => dislike()} className="fa-pull-left"><FontAwesomeIcon icon={faTimesCircle} color="red" size="5x"/></label>
            <label onClick={() => like()} className="fa-pull-right"><FontAwesomeIcon icon={faCheckCircle} color="green" size="5x"/></label>
        </div>
    )
};

export default Actions
