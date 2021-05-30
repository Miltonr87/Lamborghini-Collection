import styled from "styled-components";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

export const ChatList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 70px;
  border-bottom: 2px solid ${({ theme }) => theme.text};
  @media screen and (max-width: 480px) {
    padding: 15px;
    height: 70px;
  }
`;

export const ChatLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
`;

export const ChatAvatar = styled(Avatar)`
  margin-right: 20px;
  color: ${({ theme }) => theme.text};
`;

export const ChatDetails = styled.div`
  flex: 1;
  .p {
    color: ${({ theme }) => theme.text};
  }
`;

export const ChatTime = styled.p`
  color: ${({ theme }) => theme.text};
`;
