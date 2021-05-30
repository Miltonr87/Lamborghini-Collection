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
  width: 30%;
  height: 100%;

  margin-bottom: 20rem;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  // Motorola and Samsung
  @media screen and (max-width: 480px) {
    width: 32%;
    margin-left: 57.3vh;
    margin-bottom: 35rem;
    font-size: 0.4rem;
  }
  // Iphone X
  @media screen and (min-height: 812px) {
    width: 32%;
    margin-left: 47vh;
    margin-bottom: 45rem;
    font-size: 0.5rem;
  }
  // Ipad
  @media screen and (min-width: 481px) {
    width: 30%;
    left: 300px;
    font-size: 0.8rem;
  }
  // Ipad Pro
  @media screen and (min-width: 813px) {
    width: 30%;
    margin-left: 57vh;
    margin-bottom: 55rem;
    font-size: 1.3rem;
  }
  // Desktops...
  @media screen and (min-width: 1300px) {
    width: 20%;
    margin-left: 215vh;
    margin-top: 63vh;
    font-size: 1rem;
  }
  @media screen and (min-width: 1800px) {
    width: 20%;
    margin-left: 212vh;
    margin-top: 10vh;
    font-size: 1.3rem;  }
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const ModalText = styled.p`
    padding: 15px;
    text-align: justify;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: ${({ theme }) => theme.text};
  @media screen and (max-width: 900px) {
    margin-bottom: 2rem;
  }
`;

