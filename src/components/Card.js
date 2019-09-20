import React from 'react';
import './Card.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Card = ({person, index}) => {
    const drag = ev => {
        ev.dataTransfer.setData("text", ev.target.id)
    };

    return (
        <div id={person.name} className={index <= 2 ? `card ${index}` : "top card"} draggable onDragStart={e => drag(e)}>
            <div className="image-container">
                <img src='http://placecorgi.com/300/300' alt="james-bond" draggable="false"/>
            </div>
            <div className="info">
                <h1>{person.name}</h1>
            </div>
            <label onClick={e => e.currentTarget.parentElement.remove()} className="fa-pull-left"><FontAwesomeIcon icon={faTimesCircle} color="red" size="5x"/></label>
            <label onClick={e => e.currentTarget.parentElement.remove()} className="fa-pull-right"><FontAwesomeIcon icon={faCheckCircle} color="green" size="5x"/></label>
        </div>
    )
};

export default Card
