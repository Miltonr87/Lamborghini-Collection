import styled from "styled-components";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid black;
`;

export const HeaderLogo = styled.img`
  height: 50px;
  object-fit: content;
`;

export const IconPerson = styled(PersonIcon)`
  padding: 20px;
  color: black;
  font-size: large;
`;

export const IconChat = styled(ForumIcon)`
  padding: 20px;
  color: black;
  font-size: large;
`;

export const IconReturn = styled(ArrowBackIosIcon)`
  padding: 20px;
  color: black;
  font-size: large;
`;
