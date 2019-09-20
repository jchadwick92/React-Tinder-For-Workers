import React, {useState} from 'react';
import './DroppableContainer.css';

const LikedDroppableContainer = ({unassignedPeople, likedPersons}) => {
    const [people, setPeople] = useState(unassignedPeople);
    const [likedPeople, setLikedPeople] = useState(likedPersons);
    console.log("liked people: ", likedPeople)

    const allowDrop = ev => {
        ev.preventDefault();
    };

    const drop = ev => {
        ev.preventDefault();
        const data = ev.dataTransfer.getData("text");
        document.getElementById(data).remove();
        addToLikedPeople(data);
        removePerson(data);
    };

    const addToLikedPeople = (name) => {
        const person = people.find(person => person.name === name);
        setLikedPeople([...likedPeople, person])
    };

    const removePerson = (name) => {
        setPeople(people.filter(person => person.name !== name))
    };

    return (
        <div className="container-drag" onDrop={e => drop(e)} onDragOver={e => allowDrop(e)}/>
    )
};

export default LikedDroppableContainer;
