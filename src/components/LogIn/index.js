import React, { useState } from "react";
import {
  LoginContainer,
  LoginInput,
  ButtonConfirm,
  Signature,
} from "./Login";
import LamborghiniLogo from "../../assets/Logo/Lamborghini-Logo.png";
import LamborghiniLogged from "../../assets/Logo/diablo.gif";
import { Link } from "react-router-dom";

const Login = () => {
  const [inputData, setInputData] = useState({ username: "", password: "" });
  const [contactsData, setContactsData] = useState([]);
  const date = new Date().getFullYear();
  const welcome = contactsData.map((contact) => (
    <LoginContainer>
      <h2>
        Welcome {contact.username}! <br /> Click to advance:
      </h2>
      <Link to="/home">
        <img 
          src={LamborghiniLogged } 
          style={{ height: "40vh", boxShadow: "rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px" }} 
          alt="Click to enter" />
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
          src={LamborghiniLogo}
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
