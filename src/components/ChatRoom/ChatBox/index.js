import React from "react";
import {
  ChatList,
  ChatLink,
  ChatAvatar,
  ChatDetails,
  ChatTime,
} from "./ChatBox";

const ChatBox = ({ name, msg, time, profilePic }) => {
  return (
    <ChatLink to={`/chat/${name}`}>
      <ChatList>
        <ChatAvatar src={profilePic} />
        <ChatDetails>
          <h2>{name}</h2>
          <p>{msg}</p>
        </ChatDetails>
        <ChatTime>{time}</ChatTime>
      </ChatList>
    </ChatLink>
  );
};

export default ChatBox;
