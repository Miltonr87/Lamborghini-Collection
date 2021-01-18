import React from "react";
// import "./ChatRoom.css";
import ChatBox from "./ChatBox";

function ChatRoom() {
  return (
    <div className="chatroom">
      <ChatBox
        name="Suzana Alves"
        msg="Why did you leave me alone?!! Am I not good enough for you😞😞😞😞?!!"
        time="40 seconds ago"
        profilePic="https://correio-cdn1.cworks.cloud/fileadmin/acervo/uploads/RTEmagicC_7a574d876a.jpg.jpg"
      />
    </div>
  );
}

export default ChatRoom;
