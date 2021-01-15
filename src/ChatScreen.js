import React, {useState} from 'react';
import Avatar from "@material-ui/core/Avatar";
import './ChatScreen.css';

function ChatScreen() {
    const [messages, setMessages] = useState([
        {
            name: "Suzana Alves - Tiazinha",
            image: "https://correio-cdn1.cworks.cloud/fileadmin/acervo/uploads/RTEmagicC_7a574d876a.jpg.jpg",
            message: "Why did you leave me alone?!!"
        },
        {
            name: "Braga",
            image: "https://correio-cdn1.cworks.cloud/fileadmin/acervo/uploads/RTEmagicC_7a574d876a.jpg.jpg",
            message: "Am I not good enough for you😞😞😞😞?!!"
        },
        {
            message: "whats upp!"
        },
    ]);

    return(
        <div className="chatScreen">
            <p className="chatScreen__time">YOU MATCHED WITH SUZANA ON 01/15/2021</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message"> 
                    <Avatar 
                    className="chatScreen__image" 
                    alt={message.name} 
                    src={message.image} 
                    />
                    <p className="chatScreen__text">{message.message}</p>
                </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            ))} 
        </div>
    );
};

export default ChatScreen;