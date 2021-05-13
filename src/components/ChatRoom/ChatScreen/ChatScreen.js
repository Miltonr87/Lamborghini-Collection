import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";

export const ChatTime = styled.p`
  text-align: center;
  padding: 20px;
`;

export const ChatMessage = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  margin-bottom: 25px;
`;

export const ChatAvatar = styled(Avatar)`
  margin-right: 20px;
  text-decoration: none;
  color: inherit;
`;

export const ChatPerson = styled.p`
  margin-left: 10px;
  background-color: yellow;
  padding: 15px;
  border-radius: 20px;
`;

export const ChatUser = styled.p`
  margin-left: auto;
  background-color: goldenrod;
  padding: 15px;
  border-radius: 20px;
`;

export const InputChat = styled.form`
  display: flex;
  padding: 5px;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid black;
  box-Shadow: rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px;
`;

export const InputField = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  background-color: yellow;
  
`;

export const InputButton = styled.button`
  margin-right: 10px;
  background-color: yellow;
  font-weight: bold;
  color: black;
  
  &:hover {
  transition: all 0.2s ease-in-out;
  box-Shadow: rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px;
  border-color: none;
}
`;
