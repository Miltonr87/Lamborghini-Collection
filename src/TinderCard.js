import React, { useState } from "react";
import TinderCards from "react-tinder-card";

// Array of objects come from react-tinder-card

function TinderCard() {
  const [people, setPeople] = useState([
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
  ]);

  return (
    <div>
      <h1>Tinder Card</h1>

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
  );
}

export default TinderCard;
