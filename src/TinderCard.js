import React, { useState, useEffect } from "react";
import TinderCards from "react-tinder-card";
import database from './firebase';
import './TinderCard.css';

// Array of objects come from react-tinder-card

function TinderCard() {
  const [people, setPeople] = useState([]);
    /* Original hard-coded values for girls locations to test
    {
      name: "Holly Madison",
      url:
        "https://images-na.ssl-images-amazon.com/images/I/91G0BirVEFL.jpg",
    },
    {
      name: "Kendra Wilkinson",
      url:
        "https://i.etsystatic.com/7926516/r/il/caafdf/2304887802/il_794xN.2304887802_a7du.jpg",
    },
    */
  useEffect(() => {
    database
    .collection('people')
    .onSnapshot(snapshot => (
      setPeople(snapshot.docs.map(doc => doc.data()))
    ));
  }, []); // this prevent the infinity loop of loadings

  return (
    <div>
      
        <div className="tinderCards__cardContainer">
        {people.map((person) => (
        <TinderCards
          className="swipe"
          key={person.name}
          preventSwipe={['up', 'down']}
        >
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3> {person.name} </h3>
          </div>
        </TinderCards>
      ))}
        </div>
    </div>
  );
}

export default TinderCard;
