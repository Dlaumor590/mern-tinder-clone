import { SwipeableDrawer } from '@material-ui/core';
import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg',
        },
        {
            name: 'Jeff Bezos',
            url: 'https://www.forbes.fr/wp-content/uploads/2021/04/gettyimages-950750900-1.jpg',
        }
    ]);
    
    const swiped = (direction, nameToDelete) => {
        console.log('removing :' + nameToDelete);
    };
    
    const outOfFrame = (name) => {
        console.log(name + ' left the screen!!');
    };
    return (
        <div className='tinderCards'>
            <div className='tinderCards__cardContainer'>
            {people.map(person => (
                <TinderCard
                    className='swipe'
                    key={person.name}
                    preventSwipe={['up', 'down']}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={()=>outOfFrame(person.name)}
                >
                    <div
                        style={{backgroudImage: `url(${person.url})`}}
                        className='card'
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>           
        </div>
    )
}

export default TinderCards;
