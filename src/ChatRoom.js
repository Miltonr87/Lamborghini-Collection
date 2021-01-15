import React from "react";
// import "./ChatRoom.css";
import ChatBox from './ChatBox';

function ChatRoom() {
  return (
    <div className="chatroom">
      <ChatBox
        name="Suzana Alves - Tiazinha"
        msg="Why did you leave me alone?!! Am I not good enough for you😞😞😞😞?!!"
        time="40 seconds ago"
        profilePic="https://correio-cdn1.cworks.cloud/fileadmin/acervo/uploads/RTEmagicC_7a574d876a.jpg.jpg"
      />

      <ChatBox
        name="Joana Prado - Feiticeira "
        msg="When you come back to Brazil🇧🇷? I want to enchant you again with my dance!😍😍💃💃"
        time="3 hours ago"
        profilePic="https://s.yimg.com/ny/api/res/1.2/ICYF_cmK.MK_FSSgwMi4iw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTg1Mi44NTcxNDI4NTcxNDI5/https://s.yimg.com/uu/api/res/1.2/zdD5hjIzpCKTPR9itXKLOw--~B/aD01OTc7dz00NDg7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/pt/extra_347/c49e7df87865d9c384b252b861a62135"
      />

      <ChatBox
        name="Anna Kournikova"
        msg="I know you still want me😘😘. Let's play tennis🎾 to see who gets naked again!"
        time="5 days ago"
        profilePic="http://static0.bornrichimages.com/cdn2/500/500/91/c/wp-content/uploads/2014/04/a22_thumb.jpg"
      />

      <ChatBox
        name="Pamela Denise Anderson"
        msg="I'm not that old, you know?!! You don't know what a fifty woman is capable of..."
        time="2 weeks ago"
        profilePic="https://images-na.ssl-images-amazon.com/images/I/51GT%2BSeNMPL._AC_.jpg"
      />
    </div>
  );
}

export default ChatRoom;
