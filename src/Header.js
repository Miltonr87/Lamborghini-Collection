import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';


function Header () {
    return (
        <div>
        <PersonIcon className="header" />
            <img className="header__logo"
            src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo-500x281.png" alt="Tinder logo" />
        <ForumIcon />    
        </div>
    )
};

export default Header;