import React from "react";
import "./Header.css";
//Material UI Extensions:
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// React Router
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
    const history = useHistory();  // Give us the browser history
  return (
    <div className="header">
    {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>  
            <ArrowBackIosIcon
            className="header__icon"
            fontSize="large"
            style={{ color: "black" }}
            />
        </IconButton>    
    ) : (
      <IconButton>
        <PersonIcon
          className="header__icon"
          fontSize="large"
          style={{ color: "black" }}
        />
      </IconButton>
      )}

      <Link to="/">
        <img
          className="header__logo"
          src="https://cdn.pixabay.com/photo/2012/04/26/13/58/playboy-42527_960_720.png"
          alt="Tinder logo"
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon
            className="header__icon"
            fontSize="large"
            style={{ color: "black" }}
          />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
