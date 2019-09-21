import React, {useState} from 'react';
import './App.css';
import Deck from "./components/Deck";
import LikedDroppableContainer from "./components/LikedDroppableContainer";
import data from "./data";
import DislikedDroppableContainer from "./components/DislikedDroppableContainer";
import Actions from "./components/Actions";

const App = () => {
    const [workers, setWorkers] = useState(data);
    const [likedWorkers, setLikedWorkers] = useState([]);
    const [dislikedWorkers, setDislikedWorkers] = useState([]);

    console.log("App workers:", workers)
    console.log("App liked workers:", likedWorkers)
    console.log("App disliked workers:", dislikedWorkers)

    const onHandleLike = (updatedWorkers, updatedLikedWorkers) => {
        setWorkers(updatedWorkers);
        setLikedWorkers(updatedLikedWorkers);
    };

    const onHandleDislike = (updatedWorkers, updatedDislikedWorkers) => {
        setWorkers(updatedWorkers);
        setDislikedWorkers(updatedDislikedWorkers);
    };

    return (
        <div className="row">
            <div className="column"><DislikedDroppableContainer onHandleDislike={onHandleDislike} workers={workers} dislikedWorkers={dislikedWorkers}/></div>
            <div className="column">
                {workers.length === 0 ? (
                    <h3>No Workers Found</h3>
                ) : (<div>
                    <Deck workers={workers}/>
                    <Actions workers={workers} likedWorkers={likedWorkers} dislikedWorkers={dislikedWorkers} onHandleLike={onHandleLike} onHandleDislike={onHandleDislike} />
                </div>)}
            </div>
            <div className="column"><LikedDroppableContainer onHandleLike={onHandleLike} workers={workers} likedWorkers={likedWorkers}/></div>
        </div>
    );
}

export default App;
