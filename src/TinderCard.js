import React, {useState} from 'react';

// Array of objects come from react-tinder-card

function TinderCard() {
    const [people, setPeople] = useState([
        {
            name: 'Holly',
            url: 'https://cdn11.bigcommerce.com/s-b2hqlmx0cx/images/stencil/1280x1280/products/631/71299/dscf1826_3__81108.1547324237.jpg?c=2'
        },
        {
            name: 'Kendra',
            url: 'https://i.etsystatic.com/7926516/r/il/caafdf/2304887802/il_794xN.2304887802_a7du.jpg'
        }
    ]);    
    
    return(
        <div>
            <h1>Tinder Card</h1>
        </div>
    )
};

export default TinderCard;