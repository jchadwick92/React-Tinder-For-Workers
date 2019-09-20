import React, {useState} from 'react';
import './App.css';
import Deck from "./components/Deck";
import LikedDroppableContainer from "./components/LikedDroppableContainer";
import data from "./data";
import DislikedDroppableContainer from "./components/DislikedDroppableContainer";
import Actions from "./components/Actions";

const App = () => {
    const [people, setPeople] = useState(data);
    const [likedPeople, setLikedPeople] = useState([]);
    const [dislikedPeople, setDislikedPeople] = useState([]);

    return (
        <div className="row">
            <div className="column"><DislikedDroppableContainer unassignedPeople={people} dislikedPersons={dislikedPeople}/></div>
            <div className="column">
                <Deck persons={people}/>
                <Actions persons={people} likedPersons={likedPeople} dislikedPersons={dislikedPeople}/>
            </div>
            <div className="column"><LikedDroppableContainer unassignedPeople={people} likedPersons={likedPeople}/></div>
        </div>
    );
}

export default App;
