import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

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
      name: "Suzana Alves",
      image:
        "https://i.pinimg.com/originals/75/dd/06/75dd065523e897b3102122b4f35e21d5.jpg",
      message: "You didn't expect to find me here, did you?!",
    },
    {
      message: "...",
    }, 
  ]);

  const handleSend = (event) => {
    event.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__time">
        YOU MATCHED WITH HUGH HEFNER ON {date}
      </p>
      {messages.map((message) =>
        message.name ? (
          <div>
            <div className="chatScreen__message">
              <Avatar
                className="chatScreen__image"
                alt={message.name}
                src={message.image}
              />
              <p className="chatScreen__text">{message.message}</p>
            </div>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          className="chatScreen__inputField"
          type="text"
          placeholder="Type a message"
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
