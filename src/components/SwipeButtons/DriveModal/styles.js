import styled from "styled-components";

export const ModalBackground = styled.div`
  width: 300%;
  height: 300%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalWrapper = styled.div`
  width: 50%;
  height: 100%;
  left: auto;
  right: auto;
  margin-bottom: 20rem;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: #ffdd00;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  // Motorola and Samsung
  @media screen and (max-width: 480px) {
    width: 28%;
    height: 100%;
    margin-left: 50vh;
    margin-right: auto;
    margin-bottom: 40rem;
    font-size: 0.5rem;
  }
  // Ipad
  @media screen and (min-width: 481px) {
    width: 33%;
    height: 100%;
    margin-left: 53vh;
    margin-right: 20vh;
    margin-bottom: 50rem;
    font-size: 1.3rem;
  }
  // Iphone X
  @media screen and (min-height: 812px) {
    width: 30%;
    height: 80%;
    margin-left: 40vh;
    margin-right: auto;
    font-size: 0.7rem;
  }
  // Ipad Pro
  @media screen and (min-width: 813px) {
    width: 50%;
    height: 100%;
    margin-left: 17vh;
    margin-right: 10vh;
    margin-bottom: 50rem;
    font-size: 1.3rem;
  }
  // Desktops...
  @media screen and (min-width: 1300px) {
    width: 45%;
    margin-left: 30vh;
    margin-right: 10vh;
    margin-bottom: 40rem;
    font-size: 1.3rem;
  }
`;

export const ModalVid = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  @media screen and (max-width: 900px) {
    margin-bottom: 2rem;
  }
`;

export const ModalButton = styled.button`
  background: #141414;
  border-radius: 15px;
  margin-top: 10px;
`;
