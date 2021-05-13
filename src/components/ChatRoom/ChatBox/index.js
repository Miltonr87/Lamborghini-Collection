import React from "react";
import {
  ChatList,
  ChatLink,
  ChatAvatar,
  ChatDetails,
  ChatTime,
} from "./ChatBox";

const ChatBox = ({ name, time, profilePic }) => {
  return (
    <ChatLink to={`/chat/${name}`}>
      <ChatList>
        <ChatAvatar src={profilePic} />
        <ChatDetails>
          <h2>{name}</h2>
        </ChatDetails>
        <ChatTime>{time}</ChatTime>
      </ChatList>
    </ChatLink>
  );
};

export default ChatBox;
