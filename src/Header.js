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
            src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo-500x281.png" alt="Tinder logo" />
            
        <IconButton>
        <ForumIcon className="header__icon" fontSize="large" /> 
        </IconButton>
        </div>
    )
};

export default Header;