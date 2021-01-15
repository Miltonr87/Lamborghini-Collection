import React from "react";
import "./ChatBox.css";
//Material UI for Avatars below:
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

function ChatBox({ name, msg, time, profilePic }) {
  return (
    <Link to={`/chat/${name}`}>
    <div className="chat">
      <Avatar className="chat__image" src={profilePic}></Avatar>
      <div className="chat__details">
          <h2>{name}</h2>
          <p>{msg}</p>
      </div>
        <p className="chat__time">{time}</p>
    </div>
    </Link>
  );
}

export default ChatBox;
