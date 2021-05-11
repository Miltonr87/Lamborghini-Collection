import React from "react";
import ChatBox from "./ChatBox";

const ChatRoom = () => {
  return (
    <div>
      <ChatBox
        name="Hugh Hefner"
        msg="Whats upp, little rabbit🐰🐰?! You didn't expect to find me here, did you?!"
        time="40 seconds ago"
        profilePic="https://i.pinimg.com/originals/75/dd/06/75dd065523e897b3102122b4f35e21d5.jpg"
      />
    </div>
  );
};

export default ChatRoom;
