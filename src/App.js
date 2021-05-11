import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogIn from "./components/LogIn/Login";
import Header from "./components/Header/Header";
import TinderCard from "./components/Cards/TinderCard";
import SwipeButtons from "./components/SwipeButtons";
import ChatRoom from "./components/Chats/ChatRoom";
import ChatScreen from "./components/Chats/ChatScreen";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
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
            <TinderCard />
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
