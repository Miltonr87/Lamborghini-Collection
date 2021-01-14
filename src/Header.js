import React from 'react';
import './Header.css';
//Material UI Extensions:
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';

function Header () {
    return (
        <div className="header">

        <IconButton>
        <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
        
            <img className="header__logo"
            src="https://cdn.pixabay.com/photo/2012/04/26/13/58/playboy-42527_960_720.png" alt="Tinder logo" />
            
        <IconButton>
        <ForumIcon className="header__icon" fontSize="large" /> 
        </IconButton>
        </div>
    )
};

export default Header;