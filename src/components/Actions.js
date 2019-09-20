import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faTimesCircle} from "@fortawesome/free-solid-svg-icons";

const Actions = ({persons, likedPersons, dislikedPersons}) => {
    const [people, setPeople] = useState(persons);
    const [likedPeople, setLikedPeople] = useState(likedPersons);
    const [dislikedPeople, setDislikedPeople] = useState(dislikedPersons);

    const like = () => {
        const nameOfTopCard = getTopCardName()
        document.getElementById(nameOfTopCard).remove();
        addToLikedPeople(nameOfTopCard);
        removePerson(nameOfTopCard);
    };

    const dislike = () => {
        const nameOfTopCard = getTopCardName()
        document.getElementById(nameOfTopCard).remove();
        addToDislikedPeople(nameOfTopCard);
        removePerson(nameOfTopCard);
    };

    const getTopCardName = () => {
        return people[people.length -1].name;
    };

    const addToLikedPeople = (name) => {
        const person = people.find(person => person.name === name);
        setLikedPeople([...likedPeople, person])
    };

    const addToDislikedPeople = (name) => {
        const person = people.find(person => person.name === name);
        setDislikedPeople([...dislikedPeople, person])
    };

    const removePerson = (name) => {
        setPeople(people.filter(person => person.name !== name))
    };

    return (
        <div>
            <label onClick={() => dislike()} className="fa-pull-left"><FontAwesomeIcon icon={faTimesCircle} color="red" size="5x"/></label>
            <label onClick={() => like()} className="fa-pull-right"><FontAwesomeIcon icon={faCheckCircle} color="green" size="5x"/></label>
        </div>
    )
};

export default Actions
