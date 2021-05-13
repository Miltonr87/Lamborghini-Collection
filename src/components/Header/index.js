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
import LamborghiniLogo from "../../assets/Logo/lamborghini2.png";

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
          src={ LamborghiniLogo }
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
