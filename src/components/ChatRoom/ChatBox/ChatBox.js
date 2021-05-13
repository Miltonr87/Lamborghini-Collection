import styled from "styled-components";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

export const ChatList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 70px;
  border-bottom: 2px solid black;
`;

export const ChatLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const ChatAvatar = styled(Avatar)`
  margin-right: 20px;
`;

export const ChatDetails = styled.div`
  flex: 1;
  .p {
    color: black;
  }
`;

export const ChatTime = styled.p`
  color: black;
`;
