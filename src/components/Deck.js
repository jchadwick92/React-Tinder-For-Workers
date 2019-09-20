import React, {useState} from 'react';
import Card from "./Card";

const Deck = ({persons}) => {
    const [people, setPeople] = useState(persons);

    return (
        <div className="deck">
            <ul>
                {people.map((person, index) => {
                        return <Card key={person.name} person={person} people={people} index={index}/>
                    }
                )}
            </ul>
        </div>
    )
}

export default Deck
