import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Suzana Alves",
      image:
        "https://correio-cdn1.cworks.cloud/fileadmin/acervo/uploads/RTEmagicC_7a574d876a.jpg.jpg",
      message: "Why did you leave me alone?!!",
    },
    {
      name: "Suzana Alves",
      image:
        "https://correio-cdn1.cworks.cloud/fileadmin/acervo/uploads/RTEmagicC_7a574d876a.jpg.jpg",
      message: "Am I not good enough for you😞😞😞😞?!!",
    },
    {
      message: "...",
    }, // hard-coded values for messages to test
  ]);

  const handleSend = (event) => {
    event.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__time">
        YOU MATCHED WITH SUZANA ALVES ON 01/15/2021
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
