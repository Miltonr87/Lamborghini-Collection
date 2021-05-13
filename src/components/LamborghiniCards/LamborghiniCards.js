import styled from "styled-components";
import ReactCards from "react-tinder-card";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5vh;
`;

export const CarsDeck = styled(ReactCards)`
  position: absolute;
`;

export const CarCards = styled.div`
  position: relative;
  width: 600px;
  padding: 20px;
  max-width: 85vw;
  height: 85vw;
  border-radius: 20px;
  background-size: cover;
  box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 760px) {
    height: 60vw;
    width: 50vw;
    background-size: cover;
  }

  @media screen and (min-width: 768px) {
    height: 90vw;
    width: 80vw;
    background-size: cover;
  }

  @media screen and (min-width: 1225px) {
    height: 25vw;
    width: 20vw;
    background-size: cover;
  }
`;

export const CarName = styled.h3`
  position: absolute;
  color: black;
  /*bottom: 1.3rem;*/
  background-color: yellow;
  border-radius: 20px;
  padding: 8px;
`;
