import React from 'react';
import Card from "./Card";
import Actions from "./Actions";

const Deck = ({workers, onHandleLike, onHandleDislike}) => {

    return (
        <div className="deck">
            {workers.map((worker, index) => {
                    return <Card key={worker.name} worker={worker} index={index}/>
                }
            )}
            <Actions workers={workers} onHandleLike={onHandleLike} onHandleDislike={onHandleDislike}/>
        </div>
    )
};

export default Deck
