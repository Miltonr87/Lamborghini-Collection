import styled from "styled-components";

export const LoginContainer = styled.div`
  padding: 80px 0;
  text-align: center;
  
  @media screen and (max-width: 1000px) {
    margin: 20px;
  }
`;

export const VideoBg = styled.video`
  height: 25vh;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  border-radius: 10px;
  box-shadow: rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px;
`;


export const LoginInput = styled.input`
  border: 1px solid rgba(7, 7, 7, 0.829);
  background-color: rgba(252, 252, 252, 0.2);
  width: 250px;
  border-radius: 10px;
  font-family: "Source Sans Pro", sans-serif;
  padding: 10px 15px;
  margin: 0 auto 10px auto;
  display: block;
  text-align: center;
  font-size: 18px;
  color: black;
  font-weight: 300;
`;

export const ButtonConfirm = styled.button`
  cursor: pointer;
  appearance: none;
  outline: 0;
  background-color: black;
  border: 0;
  padding: 10px 15px;
  color: white;
  border-radius: 90px;
  width: 250px;
  font-size: 18px;
  &:hover {
        transition: all 0.2s ease-in-out;
        color: yellow;
  }
`;

export const Signature = styled.footer`
  text-align: center;
  margin-top: 30px;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  font-style: italic;

  @media screen and (max-width: 1000px) {
    border-top: 2px solid black;
  }
`;
