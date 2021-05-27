import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import Header from "./components/Header";
import LamborghiniCards from "./components/LamborghiniCards";
import SwipeButtons from "./components/SwipeButtons";
import ChatRoom from "./components/ChatRoom";
import ChatScreen from "./components/ChatRoom/ChatScreen";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu', sans-serif;
  }

  body {
    color: black;
    background-color: #ffdd00;
    font-weight: 300;
    width: 100%;
    height: 100%;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <ChatRoom />
          </Route>
          <Route path="/home">
            <Header />
            <LamborghiniCards />
            <SwipeButtons />
          </Route>
          <Route exact path="/">
            <LogIn />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
