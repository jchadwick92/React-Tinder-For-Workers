import React from 'react';
import Card from "./Card";

const Deck = ({workers}) => {

    return (
        <div className="deck">
            <ul>
                {workers.map((worker, index) => {
                        return <Card key={worker.name} worker={worker} index={index}/>
                    }
                )}
            </ul>
        </div>
    )
};

export default Deck
