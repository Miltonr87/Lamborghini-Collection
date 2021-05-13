import React, { useState } from "react";
import {
  ChatTime,
  ChatMessage,
  ChatAvatar,
  ChatPerson,
  ChatUser,
  InputChat,
  InputField,
  InputButton,
} from "./ChatScreen";

function ChatScreen() {
  const date = new Date().getFullYear();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ferruccio Lamborghini",
      image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-Nxg9cXaBtQ4%2FTzrSYWUNcmI%2FAAAAAAAAAGg%2F0-KDzkb9pwg%2Fs1600%2Fferruccio.jpeg&f=1&nofb=1",
      message: "I wanted a compact and elegant car...",
    },
    {
      name: "Ferruccio Lamborghini",
      image:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-Nxg9cXaBtQ4%2FTzrSYWUNcmI%2FAAAAAAAAAGg%2F0-KDzkb9pwg%2Fs1600%2Fferruccio.jpeg&f=1&nofb=1",
      message:
        "Ferrari never spoke to me again. He was a great man, I admit, but it was so very easy to upset him.",
    },
    {
      message: "...",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div>
      <ChatTime>TALK WITH FERRUCIO LAMBORGHINI ON {date}</ChatTime>
      {messages.map((message) =>
        message.name ? (
          <div>
            <ChatMessage>
              <ChatAvatar alt={message.name} src={message.image} />
              <ChatUser>{message.message}</ChatUser>
            </ChatMessage>
          </div>
        ) : (
          <ChatMessage>
            <ChatPerson>{message.message}</ChatPerson>
          </ChatMessage>
        )
      )}
      <InputChat>
        <InputField
          value={input}
          onChange={(event) => setInput(event.target.value)}
          type="text"
          placeholder="Type a message"
        />
        <InputButton onClick={handleSend} type="submit">
          Send Message
        </InputButton>
      </InputChat>
    </div>
  );
}

export default ChatScreen;
