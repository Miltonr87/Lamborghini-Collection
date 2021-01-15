// Import React Router:
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header';
import TinderCard from './TinderCard';
import SwipeButtons from './SwipeButtons';
import ChatRoom from './ChatRoom';
import ChatScreen from './ChatScreen';
import './App.css';

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
        <Route path="/">
          <Header />
          <TinderCard />
          <SwipeButtons />
        </Route>
      </Switch>
    </Router>

    </div>
  );
}

export default App;
