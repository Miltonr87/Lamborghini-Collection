import React, { useState } from "react";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from "./styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import Header from "./components/Header";
import LamborghiniCards from "./components/LamborghiniCards";
import SwipeButtons from "./components/SwipeButtons";
import ChatRoom from "./components/ChatRoom";
import ChatScreen from "./components/ChatRoom/ChatScreen";

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
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
              <SwipeButtons toggleTheme={toggleTheme} />
            </Route>
            <Route exact path="/">
              <LogIn />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
