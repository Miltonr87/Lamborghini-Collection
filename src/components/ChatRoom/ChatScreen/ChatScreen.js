import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";

export const ChatTime = styled.p`
  text-align: center;
  padding: 20px;
  color: grey;
`;

export const ChatMessage = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

export const ChatAvatar = styled(Avatar)`
  margin-right: 20px;
  text-decoration: none;
  color: inherit;
`;

export const ChatPerson = styled.p`
  margin-left: 10px;
  background-color: lightgrey;
  padding: 15px;
  border-radius: 20px;
`;

export const ChatUser = styled.p`
  margin-left: auto;
  background-color: #29b3cd;
  color: white;
  padding: 15px;
  border-radius: 20px;
`;

export const InputChat = styled.form`
  display: flex;
  padding: 5px;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid lightgray;
`;

export const InputField = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
`;

export const InputButton = styled.button`
  border: none;
  margin-right: 20px;
  background-color: white;
  font-weight: bold;
  color: black;
`;
