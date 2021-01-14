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
import './App.css';

function App() {
  return (
    <div className="App">
    
    <Router>
      <Switch>
        <Route path="/chat">
          <Header backButton="/" />
            <h1> Im a ChatPage</h1>
        </Route>
        <Route path="/">
          <Header />
          {/* Tinder Card */}
          <TinderCard />
          {/* Swipe Buttons */}
          <SwipeButtons />
        </Route>
      </Switch>
    </Router>

    </div>
  );
}

export default App;
