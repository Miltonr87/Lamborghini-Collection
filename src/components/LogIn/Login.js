import React from 'react';
import Input from './Input';
import './Login.css';
import PlayboyLogo from '../extra/playboyLogo.png';
import { Link } from "react-router-dom";


function Login () { 
    return (
        <div className="container">  
            <form className="form">
                <img src={PlayboyLogo} style={{ marginBottom: '20px', height: '10rem' }} alt="Playboy Logo"/>
                <Input
                    className="login__input"
                    type = "text"
                    placeholder= "Username"
                />
                <Input 
                    className="login__input"
                    type = "password"
                    placeholder= "Password"
                />
                <Link to="/home">
                <button className="button__confirm">Login</button>
                </Link>
            </form>
        </div>  
    )
};

export default Login;