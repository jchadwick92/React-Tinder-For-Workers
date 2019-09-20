import React, {useState} from 'react';
import './DroppableContainer.css';

const DislikedDroppableContainer = ({unassignedPeople}) => {
    const [people, setPeople] = useState(unassignedPeople);
    const [dislikedPeople, setDislikedPeople] = useState([]);

    console.log("disliked people: ", dislikedPeople);

    const allowDrop = ev => {
        ev.preventDefault();
    };

    const drop = ev => {
        ev.preventDefault();
        const data = ev.dataTransfer.getData("text");
        document.getElementById(data).remove();
        addToDislikedPeople(data);
        removePerson(data);
    };

    const addToDislikedPeople = (name) => {
        const person = people.find(person => person.name === name);
        setDislikedPeople([...dislikedPeople, person])
    };

    const removePerson = (name) => {
        setPeople(people.filter(person => person.name !== name))
    };

    return (
        <div className="container-drag" onDrop={e => drop(e)} onDragOver={e => allowDrop(e)}/>
    )
};

export default DislikedDroppableContainer;
