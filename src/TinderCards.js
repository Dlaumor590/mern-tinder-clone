//import { SwipeableDrawer } from '@material-ui/core';
import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {
    const [people] = useState([
        {
            name: 'Elon Musk',
            url: 'https://cdn.pixabay.com/photo/2021/05/02/02/05/elon-musk-6222396_960_720.jpg',
        },
        {
            name: 'Jeff Bezos',
            url: 'https://www.forbes.fr/wp-content/uploads/2021/04/gettyimages-950750900-1.jpg',
        },
        {
            name: 'Mia Khalifa',
            url:'https://cdn.pixabay.com/photo/2021/04/08/09/14/actress-6161118_960_720.png',
        },
        {
            name: 'Diane Doni',
            url:'https://scontent.flfw1-1.fna.fbcdn.net/v/t1.6435-9/52666800_847358125602191_8494094316640141312_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=J6I1bLUjiaUAX9sQTuG&_nc_ht=scontent.flfw1-1.fna&oh=955f083c2e7188654740a04db87d6220&oe=60E36EC3',
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
                        style={{backgroundImage: `url(${person.url})`}}
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
