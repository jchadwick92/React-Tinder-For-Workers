import React, {useState} from 'react';
import './App.css';
import Deck from "./components/Deck";
import data from "./data";
import {newDislikedWorkersArray, newLikedWorkersArray, newWorkersArray} from "./utilities";
import DroppableContainer from "./components/DroppableContainer";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

const App = () => {
    const [workers, setWorkers] = useState(data);
    const [likedWorkers, setLikedWorkers] = useState([]);
    const [dislikedWorkers, setDislikedWorkers] = useState([]);

    console.log("App workers:", workers);
    console.log("App liked workers:", likedWorkers);
    console.log("App disliked workers:", dislikedWorkers);

    const notify = (worker, like) =>
        like
            ? toast(`${worker} has been liked`, {
                position: toast.POSITION.TOP_RIGHT,
                type: toast.TYPE.SUCCESS
            })
            : toast(`${worker} has been disliked`, {
                position: toast.POSITION.TOP_LEFT,
                type: toast.TYPE.ERROR
            });

    const handleLike = worker => {
        setWorkers(newWorkersArray(worker, workers));
        setLikedWorkers(newLikedWorkersArray(worker, workers, likedWorkers));
        notify(worker, true);
    };

    const handleDislike = worker => {
        setWorkers(newWorkersArray(worker, workers));
        setDislikedWorkers(newDislikedWorkersArray(worker, workers, dislikedWorkers));
        notify(worker, false);
    };

    return (
        <div className="row">
            <div className="column"><DroppableContainer onHandleDrop={handleDislike}/></div>
            <div className="column">
                {workers.length === 0
                    ? (<h3 className="text-center">No Workers Found</h3>)
                    : (<Deck workers={workers} onHandleLike={handleLike} onHandleDislike={handleDislike}/>)
                }
            </div>
            <div className="column"><DroppableContainer onHandleDrop={handleLike}/></div>
        </div>
    );
};

export default App;
