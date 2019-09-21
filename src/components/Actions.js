import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faTimesCircle} from "@fortawesome/free-solid-svg-icons";

const Actions = ({workers, onHandleLike, onHandleDislike}) => {
    const like = () => {
        const worker = getTopCardName();
        onHandleLike(worker)
    };

    const dislike = () => {
        const worker = getTopCardName();
        onHandleDislike(worker)
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
