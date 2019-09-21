import React from 'react';
import Card from "./Card";
import Actions from "./Actions";
import "./Deck.css"

const Deck = ({workers, onHandleLike, onHandleDislike}) => {

    return (
        <div className="deck">
            <ul>
                {workers.map((worker, index) => {
                        return <Card key={worker.name} worker={worker} index={index}/>
                    }
                )}
            </ul>
            <Actions  workers={workers} onHandleLike={onHandleLike} onHandleDislike={onHandleDislike}/>
        </div>
    )
};

export default Deck
