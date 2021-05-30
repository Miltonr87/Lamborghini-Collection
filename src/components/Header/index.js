import React from "react";
import Sound from "react-sound";
import LamborghiniSound from "../../assets/Media/lamborghini.mp3";
import {
  HeaderContainer,
  HeaderLogo,
  IconPerson,
  IconChat,
  IconReturn,
} from "./styles";
import { Link, useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import LamborghiniLogo from "../../assets/Logo/LogoAnimated.gif";

const Header = ({ backButton }) => {
  const history = useHistory();

  return (
    <>
      <Sound
        url={LamborghiniSound}
        playStatus={Sound.status.PLAYING}
        playFromPosition={100}
        autoLoad={true}
        loop={true}
      />
      <HeaderContainer>
        {backButton ? (
          <Link to="/Home">
          <IconButton onClick={() => history.replace(backButton)}>
            <IconReturn />
          </IconButton>
          </Link>
        ) : (
          <Link to="/">
            <IconButton>
              <IconPerson />
            </IconButton>
          </Link>
        )}

        <Link to="/home">
          <HeaderLogo src={LamborghiniLogo} alt="Lamborghini logo" />
        </Link>

        <Link to="/chat">
          <IconButton>
            <IconChat />
          </IconButton>
        </Link>
      </HeaderContainer>
    </>
  );
};

export default Header;
