import React, { useState } from "react";
import {
  PlayboyImage,
  LoginContainer,
  LoginInput,
  ButtonConfirm,
  Signature,
} from "./Login";
import PlayboyLogo from "../../assets/Logo/playboyLogo.png";
import PlayboyLogged from "../../assets/Logo/playboy-wide.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [inputData, setInputData] = useState({ username: "", password: "" });
  const [contactsData, setContactsData] = useState([]);
  const date = new Date().getFullYear();
  const welcome = contactsData.map((contact) => (
    <LoginContainer>
      <h2>
        Welcome {contact.username}! <br /> Click to continue:
      </h2>
      <Link to="/home">
        <PlayboyImage src={PlayboyLogged} alt="Click to enter" />
      </Link>
    </LoginContainer>
  ));

  function handleChange(e) {
    const { name, value } = e.target;
    setInputData((prevInputData) => ({ ...prevInputData, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setContactsData((prevContacts) => [...prevContacts, inputData]);
  }

  return (
    <LoginContainer>
      <form onSubmit={handleSubmit}>
        <img
          src={PlayboyLogo}
          style={{ marginBottom: "20px", height: "10rem" }}
          alt="Playboy Logo"
        />
        <LoginInput
          type="text"
          placeholder="Username"
          name="username"
          value={inputData.login}
          onChange={handleChange}
          required
        />
        <LoginInput
          type="password"
          placeholder="Password"
          name="password"
          value={inputData.password}
          onChange={handleChange}
          required
        />
        <ButtonConfirm>Login</ButtonConfirm>
        {welcome}
      </form>
      <Signature>
        <p> © Milton Rodrigues - {date} </p>
      </Signature>
    </LoginContainer>
  );
};

export default Login;
