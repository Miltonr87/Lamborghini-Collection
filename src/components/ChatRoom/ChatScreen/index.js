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
      name: "Hugh Hefner",
      image:
        "https://i.pinimg.com/originals/75/dd/06/75dd065523e897b3102122b4f35e21d5.jpg",
      message: "Whats upp, little rabbit🐰🐰?!",
    },
    {
      name: "Hugh Hefner",
      image:
        "https://i.pinimg.com/originals/75/dd/06/75dd065523e897b3102122b4f35e21d5.jpg",
      message: "You didn't expect to find me here, did you?!",
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
      <ChatTime>YOU MATCHED WITH HUGH HEFNER ON {date}</ChatTime>
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
