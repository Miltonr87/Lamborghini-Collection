import React, { useState, useEffect } from "react";
import database from "../Firebase/firebase";
import { 
  CardContainer, 
  CarsDeck, 
  CarCards, 
  CarName } from './LamborghiniCards';

function LamborghiniCards() {
  const [lamborghini, setLamborghini] = useState([]);
  
  useEffect(() => {
    database
      .collection("cars")
      .onSnapshot((snapshot) =>
        setLamborghini(snapshot.docs.map((doc) => doc.data()))
      );
  }, []); 

  return (
    <div>
      <CardContainer>
        {lamborghini.map((cars) => (
          <CarsDeck
            key={cars.name}
          >
            <CarCards
              style={{ backgroundImage: `url(${cars.url})` }}
            >
              <CarName> {cars.name} </CarName>
            </CarCards>
          </CarsDeck>
        ))}
      </CardContainer>
    </div>
  );
}

export default LamborghiniCards;
