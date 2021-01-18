// Import React Router:
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "./LogIn/Login";
/*import Footer from './Footer/Footer';*/
import Header from "./Header/Header";
import TinderCard from "./Cards/TinderCard";
import SwipeButtons from "./SwipeButtons/SwipeButtons";
import ChatRoom from "./Chats/ChatRoom";
import ChatScreen from "./Chats/ChatScreen";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* In a Chat With a Person */}
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          {/* ChatRoom */}
          <Route path="/chat">
            <Header backButton="/" />
            <ChatRoom />
          </Route>
          {/* MainMenu */}
          <Route path="/home">
            <Header />
            <TinderCard />
            <SwipeButtons />
          </Route>
          {/* LogIn */}
          <Route path="/">
            <LogIn />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
