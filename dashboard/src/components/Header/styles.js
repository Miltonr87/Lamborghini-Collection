import styled from "styled-components";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.text};
`;

export const HeaderLogo = styled.img`
  height: 50px;
  object-fit: content;
  color: ${({ theme }) => theme.text};
  @media screen and (max-width: 1000px) {
    height: 40px;
  }
`;

export const IconPerson = styled(PersonIcon)`
  padding: 20px;
  color: ${({ theme }) => theme.text};
  font-size: large;
`;

export const IconChat = styled(ForumIcon)`
  padding: 20px;
  color: ${({ theme }) => theme.text};
  font-size: large;
`;

export const IconReturn = styled(ArrowBackIosIcon)`
  padding: 20px;
  color: ${({ theme }) => theme.text};
  font-size: large;
`;
