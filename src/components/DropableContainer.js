import React, {useState} from 'react';
import './DroppableContainer.css';

const DropableContainer = ({unassignedPeople, likedPersons}) => {
    const [people, setPeople] = useState(unassignedPeople);
    const [likedPeople, setLikedPeople] = useState(likedPersons);

    const allowDrop = ev => {
        ev.preventDefault();
    };

    const drop = ev => {
        ev.preventDefault();
        const data = ev.dataTransfer.getData("text");
        document.getElementById(data).remove()
    };

    return (
        <div className="container-drag" onDrop={e => drop(e)} onDragOver={e => allowDrop(e)}/>
    )
};

export default DropableContainer;
