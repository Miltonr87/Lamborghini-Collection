// Import React Router:
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './Header';
import TinderCard from './TinderCard';

function App() {
  return (
    <div className="App">
    
    <Header />
    <Router>

      <Switch>
        <Route path="/chat">
          <h1> Im a ChatPage</h1>
        </Route>
        <Route path="/">
          {/* Tinder Card */}
          <TinderCard />
        </Route>
      </Switch>

    </Router>


    </div>
  );
}

export default App;
