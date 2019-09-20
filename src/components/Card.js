import React, {useState} from 'react';
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
        </div>
    )
};

export default Card
