import React, {useState} from 'react';
import './App.css';
import Deck from "./components/Deck";
import LikedDroppableContainer from "./components/LikedDroppableContainer";
import data from "./data";
import DislikedDroppableContainer from "./components/DislikedDroppableContainer";

const App = () => {
    const [people, setPeople] = useState(data);

    return (
        <div className="row">
            <div className="column"><DislikedDroppableContainer unassignedPeople={people}/></div>
            <div className="column"><Deck persons={people}/></div>
            <div className="column"><LikedDroppableContainer unassignedPeople={people}/></div>
        </div>
    );
}

export default App;
