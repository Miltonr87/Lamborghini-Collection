import React from "react";
//Material UI for Avatars below:
import Avatar from "@material-ui/core/Avatar";

function ChatBox({ name, msg, time, profilePic }) {
  return (
    <div className="chat">
      <Avatar className="chat__image" alt={name} src={profilePic}></Avatar>
      <div>
          <h2>{name}</h2>
          <p>{msg}</p>
      </div>
        <p>{time}</p>
    </div>
  );
}

export default ChatBox;
