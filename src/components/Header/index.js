import React from "react";
import {
  HeaderContainer,
  HeaderLogo,
  IconPerson,
  IconChat,
  IconReturn,
} from "./Header";
import { Link, useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

const Header = ({ backButton }) => {
  const history = useHistory();

  return (
    <HeaderContainer>
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <IconReturn />
        </IconButton>
      ) : (
        <Link to="/">
          <IconButton>
            <IconPerson />
          </IconButton>
        </Link>
      )}

      <Link to="/home">
        <HeaderLogo
          src="https://cdn.pixabay.com/photo/2012/04/26/13/58/playboy-42527_960_720.png"
          alt="Playboy logo"
        />
      </Link>

      <Link to="/chat">
        <IconButton>
          <IconChat />
        </IconButton>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
